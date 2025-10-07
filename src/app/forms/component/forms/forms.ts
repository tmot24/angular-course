import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { checkRegExp, conformPassword } from './helpers';

@Component({
  selector: 'app-forms',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './forms.html',
})
export class Forms {
  protected form = new FormGroup({
    login: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ]),
    password: new FormControl('', [ Validators.required ]),
    repeatPassword: new FormControl('', [ Validators.required ])
  }, {
    validators: [conformPassword]
  });

  protected submitHandler() {
    if (this.form.valid) {
      console.log('this.form.value', this.form.value);
    }
  }
}
