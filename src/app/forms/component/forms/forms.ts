import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  protected form = new FormGroup({
    login: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required ])
  });

  protected submitHandler() {
    if (this.form.valid) {
      console.log('this.form.value', this.form.value);
    }
  }
}
