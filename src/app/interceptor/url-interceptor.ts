import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.js';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    url: `${environment.apiUrl}/${req.url}`
  });
  return next(apiReq);
};
