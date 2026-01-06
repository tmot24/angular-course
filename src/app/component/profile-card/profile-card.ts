import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Profile } from '../../data/profile/interface.js';
import { NgOptimizedImage } from '@angular/common';
import { AvatarUrlPipe } from '../../pipe/avatar-url-pipe.js';

@Component({
  selector: 'app-profile-card',
  imports: [
    NgOptimizedImage,
    AvatarUrlPipe,
  ],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCard {
  readonly profile = input.required<Profile>()
}
