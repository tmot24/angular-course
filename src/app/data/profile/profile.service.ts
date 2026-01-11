import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Pageable, Profile } from './interface.js';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private userId = toSignal(this.route.queryParamMap.pipe(
    map((params) => params.get('id') ?? undefined),
  ), { initialValue: undefined });

  filteredProfiles = signal<Profile[]>([]);

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

  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile>('account/me', profile);
  }

  uploadAvatar(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post('account/upload_image', formData);
  }

  filterProfiles(params: Record<string, string | null | undefined>) {
    const cleanParams = Object.entries(params)
      .filter(([ _, value ]) => value != null && value !== '')
      .reduce((acc, [ key, value ]) => {
        acc[key] = value as string;
        return acc;
      }, {} as Record<string, string>);

    return this.http.get<Pageable<Profile>>('account/accounts', { params: cleanParams }).pipe(
      tap((res) => this.filteredProfiles.set(res.items)),
    );
  }
}
