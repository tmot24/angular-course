import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Profile } from '../../data/profile/interface.js';
import { AvatarUrlPipe } from '../../pipe/avatar-url-pipe.js';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-subscriber-preview',
  imports: [
    AvatarUrlPipe,
    NgOptimizedImage,
  ],
  templateUrl: './subscriber-preview.html',
  styleUrl: './subscriber-preview.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriberPreview {
  profile = input.required<Profile>()
}
