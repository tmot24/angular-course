import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, tap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service.js';
import { AuthResponse } from '../auth/interface.js';

// Subject для хранения нового токена
const refreshTokenSubject = new BehaviorSubject<string | null>(null);
// Observable процесса обновления (чтобы переиспользовать)
let refreshTokenInProgress$: Observable<AuthResponse> | null = null;

const addToken = ({ request, token }: { request: HttpRequest<unknown>, token: string }) => {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const token = cookieService.get('token');

  const tokenReq = addToken({
    request: req,
    token,
  });

  return next(tokenReq).pipe(
    catchError((error) => {
      if (error.status === 403) {
        // Если уже идёт обновление токена
        if (refreshTokenInProgress$) {
          // Ждём получения нового токена и повторяем запрос
          return refreshTokenSubject.pipe(
            filter((token) => token !== null),
            take(1),
            switchMap((token) => next(addToken({ request: req, token: token! }))),
          );
        }

        // Начинаем процесс обновления токена
        refreshTokenSubject.next(null);

        refreshTokenInProgress$ = authService.refreshToken().pipe(
          tap((result) => {
            // Отправляем новый токен всем ожидающим запросам
            refreshTokenSubject.next(result.access_token);
            refreshTokenInProgress$ = null;
          }),
          catchError((refreshError) => {
            refreshTokenSubject.next(null);
            refreshTokenInProgress$ = null;

            // Здесь можно добавить логику выхода из системы
            // authService.logout();

            return throwError(() => refreshError);
          }),
        );

        return refreshTokenInProgress$.pipe(
          switchMap((result) => next(addToken({ request: req, token: result.access_token }))),
        );
      }

      return throwError(() => error);
    }),
  );
};
