import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isUserLoggedIn = signal(false);
  public userName = signal('one');

  public login() {
    this.isUserLoggedIn.set(true);
  }
}
