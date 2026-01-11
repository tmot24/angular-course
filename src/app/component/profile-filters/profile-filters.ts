import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../data/profile/profile.service.js';
import { startWith } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-filters',
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './profile-filters.html',
  styleUrl: './profile-filters.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFilters {
  private formBuilder = inject(FormBuilder);
  private profileService = inject(ProfileService);

  searchForm = this.formBuilder.group<Record<string, string>>({
    firstName: '',
    lastName: '',
    stack: '',
  });

  private formValue = toSignal(
    this.searchForm.valueChanges.pipe(startWith(this.searchForm.value)),
    { initialValue: {} },
  );

  constructor() {
    const destroyRef = inject(DestroyRef);

    effect(() => {
      const value = this.formValue();
      this.profileService.filterProfiles(value).pipe(takeUntilDestroyed(destroyRef)).subscribe();
    });
  }
}
