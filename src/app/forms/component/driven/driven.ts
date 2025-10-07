import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TemplateForm {
  login: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-driven',
  imports: [
    FormsModule
  ],
  templateUrl: './driven.html',
  styleUrl: './driven.css'
})
export class Driven {
  protected templateDrivenForm: TemplateForm = {
    login: '123',
    email: '',
    password: '',
  }


  protected submitHandler() {
    console.log('this.templateForm', this.templateDrivenForm);
  }
}
