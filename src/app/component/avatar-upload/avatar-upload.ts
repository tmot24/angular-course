import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SvgIcon } from '../svg-icon/svg-icon.js';
import { Dnd } from '../../directive/dnd.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avatar-upload',
  imports: [
    NgOptimizedImage,
    SvgIcon,
    Dnd,
    FormsModule,
  ],
  templateUrl: './avatar-upload.html',
  styleUrl: './avatar-upload.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarUpload {
  preview = signal('images/avatar.svg');
  avatar = signal<File | undefined>(undefined);

  fileBrowserHandler(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      const file = target.files?.[0];
      this.processFile(file);

    }
  }

  onFileDropped(file?: File) {
    this.processFile(file);
  }

  private processFile(file: File | null | undefined) {
    if (file?.type.match('image')) {
      const reader = new FileReader();

      reader.onload = (loadEvent) => {
        this.preview.set(loadEvent.target?.result?.toString() ?? 'images/avatar.svg');
      };

      reader.readAsDataURL(file);
      this.avatar.set(file);
    }
  }
}
