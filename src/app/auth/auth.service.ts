import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from './interface.js';
import { CookieService } from 'ngx-cookie-service';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private cookie = inject(CookieService);

  login(payload: { username: string, password: string }) {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);

    return this.http.post<AuthResponse>('auth/token', formData).pipe(
      tap((response) => this.saveTokens(response)),
    );
  }

  refreshToken() {
    return this.http.post<AuthResponse>('auth/refresh', {
      "refresh_token": this.cookie.get('refreshToken')
    }).pipe(
      tap((response) => this.saveTokens(response)),
      catchError((error) => {
        this.logout();
        return throwError(() => error);
      }),
    );
  }

  logout() {
    this.cookie.delete('token');
    this.cookie.delete('refreshToken');
  }

  private saveTokens(response: AuthResponse) {
    this.cookie.set('token', response.access_token);
    this.cookie.set('refreshToken', response.refresh_token);
  }
}
