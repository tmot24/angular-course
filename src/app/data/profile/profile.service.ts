import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Profile } from './interface.js';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // httpResource для get (отменяет предыдущий запрос)
  profiles = httpResource<Profile[]>(() => 'account/test_accounts', {
    defaultValue: [],
  });

  user = httpResource<Profile>(() => 'account/me');
}
