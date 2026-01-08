import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SvgIcon } from '../svg-icon/svg-icon.js';
import { SubscriberPreview } from '../subscriber-preview/subscriber-preview.js';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/profile/profile.service.js';

@Component({
  selector: 'app-sidebar',
  imports: [
    NgOptimizedImage,
    SvgIcon,
    SubscriberPreview,
    RouterLink,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  private profileService = inject(ProfileService);
  subscribers = this.profileService.subscribersShortList.value;
  user = this.profileService.user.value;

  menuItems = signal([
    {
      label: 'Моя страница',
      icon: 'home',
      link: '',
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ]);
}
