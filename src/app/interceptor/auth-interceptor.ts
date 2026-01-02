import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '../user/user.service.js';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);

  if (userService.isUserLoggedIn()) {
    const authReq = req.clone({
      setHeaders: {
        auth: `Bear token`,
      },
    });

    return next(authReq);
  } else {
    throw new Error('Необходимо залогиниться');
  }
};
