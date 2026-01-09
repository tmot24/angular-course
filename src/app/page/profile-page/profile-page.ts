import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ProfileHeader } from '../../component/profile/profile-header/profile-header.js';
import { ProfileService } from '../../data/profile/profile.service.js';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SvgIcon } from '../../component/svg-icon/svg-icon.js';
import { NgOptimizedImage } from '@angular/common';
import { AvatarUrlPipe } from '../../pipe/avatar-url-pipe.js';
import { PostFeed } from '../../component/profile/post-feed/post-feed.js';

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileHeader,
    SvgIcon,
    RouterLink,
    NgOptimizedImage,
    AvatarUrlPipe,
    PostFeed,
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
  private route = inject(ActivatedRoute);
  private profileService = inject(ProfileService);
  private userId = toSignal(this.route.queryParamMap.pipe(
    map((params) => params.get('id') ?? undefined),
  ), { initialValue: undefined });
  private currentUser = this.profileService.currentUser.value;
  private userById = this.profileService.userById.value;

  profile = computed(() => this.userId() ? this.userById() : this.currentUser())

  subscribers = this.profileService.subscribersShortList.value;
}
