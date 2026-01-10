import { ChangeDetectionStrategy, Component, effect, inject, viewChild } from '@angular/core';
import { ProfileHeader } from '../../component/profile/profile-header/profile-header.js';
import { ProfileService } from '../../data/profile/profile.service.js';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AvatarUpload } from '../../component/avatar-upload/avatar-upload.js';

@Component({
  selector: 'app-settings-page',
  imports: [
    ProfileHeader,
    ReactiveFormsModule,
    AvatarUpload,
  ],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage {
  private formBuilder = inject(FormBuilder);
  private profileService = inject(ProfileService);
  profile = this.profileService.currentUser;
  avatarUploader = viewChild(AvatarUpload);

  form = this.formBuilder.group({
    firstname: [ this.profile.value()?.firstName, Validators.required ],
    lastname: [ this.profile.value()?.lastName ],
    username: [ { value: this.profile.value()?.username, disabled: true }, Validators.required ],
    description: [ this.profile.value()?.description ],
    stack: [ this.profile.value()?.stack?.join(',') ],
  });

  constructor() {
    effect(() => {
      const profile = this.profileService.currentUser.value();

      if (profile) {
        this.form.patchValue({
          firstname: profile.firstName,
          lastname: profile.lastName,
          username: profile.username,
          description: profile.description,
          stack: profile.stack?.join(','),
        });
      }
    });
  }

  onSave() {
    if (this.form.valid) {
      const avatar = this.avatarUploader()?.avatar;
      const file = avatar?.();
      const form = this.form.value;
      void firstValueFrom(this.profileService.patchProfile({
        ...form,
        username: form.username!,
        stack: form.stack?.split(','),
      }));
      if (file) {
        void firstValueFrom(this.profileService.uploadAvatar(file));
      }
    }
  }
}
