import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AvatarUrlPipe } from '../../../pipe/avatar-url-pipe.js';
import { NgOptimizedImage } from '@angular/common';
import { Profile } from '../../../data/profile/interface.js';

@Component({
  selector: 'app-profile-header',
  imports: [
    AvatarUrlPipe,
    NgOptimizedImage,
  ],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileHeader {
  profile = input<Profile>();
}
