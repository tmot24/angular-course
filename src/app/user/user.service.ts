import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isUserLoggedIn = signal(false);

  public login() {
    this.isUserLoggedIn.set(true);
  }
}
