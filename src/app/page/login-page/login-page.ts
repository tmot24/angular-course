import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service.js';
import { ActivatedRoute, Router } from '@angular/router';
import { SvgIcon } from '../../component/svg-icon/svg-icon.js';

@Component({
  selector: 'app-login',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    SvgIcon,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected isPasswordVisible = signal(false);

  form = new FormGroup({
    username: new FormControl<string | null>('ya_grisha', Validators.required),
    password: new FormControl<string | null>('1don7l4tBa', Validators.required),
  });

  protected onSubmit() {
    if (this.form.valid) {
      this.authService.login({
        username: this.form.value.username!,
        password: this.form.value.password!,
      }).subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/';
          void this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          console.error('Login failed', error);
        },
      });
    }
  }

  protected togglePasswordVisibility() {
    this.isPasswordVisible.update(value => !value);
  }
}
