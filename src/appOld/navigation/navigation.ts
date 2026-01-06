import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION_ROUTES } from '../navigation';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navigation.html',
})
export class Navigation {
  protected routes = NAVIGATION_ROUTES;
}
