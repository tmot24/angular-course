import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../user/user.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  return userService.isUserLoggedIn();
};
