import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileCard } from '../../component/profile-card/profile-card.js';
import { ProfileService } from '../../data/profile/profile.service.js';

@Component({
  selector: 'app-search-page',
  imports: [
    ProfileCard,
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  profileData = inject(ProfileService).profiles;
}
