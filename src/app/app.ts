import { Component } from '@angular/core';
import { ProfileCard } from './component/profile-card/profile-card.js';

@Component({
  selector: 'app-root',
  imports: [
    ProfileCard,
  ],
  templateUrl: './app.html',
})
export class App {
}
