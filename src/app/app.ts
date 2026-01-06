import { Component, inject } from '@angular/core';
import { ProfileCard } from './component/profile-card/profile-card.js';
import { ProfileService } from './data/profile/profile.service.js';

@Component({
  selector: 'app-root',
  imports: [
    ProfileCard,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  profileData = inject(ProfileService).profileData;
}
