import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar.js';
import { ProfileService } from '../../data/profile/profile.service.js';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    Sidebar,
    JsonPipe,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
  user = inject(ProfileService).user.value;
}
