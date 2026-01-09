import { inject, Injectable } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Pageable, Profile } from './interface.js';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private userId = toSignal(this.route.queryParamMap.pipe(
    map((params) => params.get('id') ?? undefined),
  ), { initialValue: undefined });

  currentUser = httpResource<Profile>(() => 'account/me');
  userById = rxResource({
    params: () => ({ id: this.userId() }),
    stream: ({ params: { id } }) => {
      if (!id) {
        return EMPTY;
      }
      return this.http.get<Profile>(`account/${id}`);
    },
  });

  profiles = httpResource<Profile[]>(() => 'account/test_accounts', {
    defaultValue: [],
  });

  subscribersShortList = rxResource({
    params: () => ({ page: 1, size: 6 }),
    stream: ({ params }) => {
      return this.http.get<Pageable<Profile>>('account/subscribers/', { params });
    },
  });
}
