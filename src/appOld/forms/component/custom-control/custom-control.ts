import { Component, computed, Input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RateOptions {
  rates: number;
  text?: string;
}

@Component({
  selector: 'app-custom-control',
  imports: [],
  templateUrl: './custom-control.html',
  // Расширение NG_VALUE_ACCESSOR
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomControl,
    },
  ],
})
export class CustomControl implements ControlValueAccessor {
  @Input() set inputOptions(options: RateOptions | undefined) {
    this.options.set(options);
  }

  // внутренний сигнал для options
  protected options = signal<RateOptions | undefined>(undefined);
  protected currentRate = signal<number | undefined>(undefined);
  protected disabled = signal(false);
  protected touched = signal(false);

  protected ratesArray = computed(() => Array.from({ length: this.options()?.rates ?? 0 }, (_, i) => i + 1));

  protected onRate(index: number) {
    this.markAsTouched();
    if (!this.disabled()) {
      this.currentRate.set(index);
      this.onChange(this.currentRate());
    }
  }

  writeValue(rate: number): void {
    this.currentRate.set(rate);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  markAsTouched() {
    if (!this.touched()) {
      this.onTouched();
      this.touched.set(true);
    }
  }

  // внутренние колбэки, которые Angular зарегистрирует через registerOnChange/registerOnTouched
  private onChange(currentRate?: number) {}
  // внутренние колбэки, которые Angular зарегистрирует через registerOnChange/registerOnTouched
  private onTouched() {}
}
