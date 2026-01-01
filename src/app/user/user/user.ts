import { Component, inject } from '@angular/core';
import { UserService } from '../user.service.js';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
})
export class User {
  protected userService = inject(UserService);

  protected login() {
    this.userService.login();
  }
}
