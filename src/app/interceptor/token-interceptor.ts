import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service.js';

const addToken = ({ request, token }: { request: HttpRequest<unknown>, token: string }) => {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const refreshToken = ({ authService, next, request }: {
  authService: AuthService,
  request: HttpRequest<unknown>
  next: HttpHandlerFn
}) => {
  return authService.refreshToken().pipe(
    switchMap((result) => next(addToken({ request, token: result.access_token }))),
  );
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
        return refreshToken({ authService, next, request: req });
      }
      return throwError(() => error);
    }),
  );
};

