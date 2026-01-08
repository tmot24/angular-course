import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../environment.js';

@Pipe({
  name: 'avatarUrl',
})
export class AvatarUrlPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) return '/images/avatar.svg';
    return `${environment.apiUrl}/${value}`;
  }
}
