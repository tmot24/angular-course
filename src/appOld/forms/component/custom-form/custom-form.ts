import { Component, inject } from '@angular/core';
import { CustomControl, RateOptions } from '../custom-control/custom-control.js';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  imports: [
    CustomControl,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './custom-form.html',
})
export class CustomForm {
  private fb = inject(FormBuilder);

  protected customForm = this.fb.group({
    rate: [3]
  })

  protected ratesOptions: RateOptions = {
    rates: 10,
    text: 'Оценка'
  }
}
