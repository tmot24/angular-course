import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Profile } from './interface.js';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileData = httpResource<Profile[]>(() => 'account/test_accounts', {
    defaultValue: [],
  });
}
