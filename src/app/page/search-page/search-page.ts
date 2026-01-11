import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileCard } from '../../component/profile/profile-card/profile-card.js';
import { ProfileService } from '../../data/profile/profile.service.js';
import { ProfileFilters } from '../../component/profile-filters/profile-filters.js';

@Component({
  selector: 'app-search-page',
  imports: [
    ProfileCard,
    ProfileFilters,
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  private profileService = inject(ProfileService);
  profileData = this.profileService.filteredProfiles;
}
