import { AbstractControl, ValidatorFn } from '@angular/forms';

export const checkRegExp = (regex: RegExp): ValidatorFn => {
  return (control: AbstractControl) => {
    const forbidden = regex.test(control.value);
    return forbidden ? null : { forbiddenValue: { value: control.value } };
  };
};

export const conformPassword: ValidatorFn =  (control: AbstractControl) => {
  return control.value.password === control.value.repeatPassword ? null : { PasswordDoNotMatch: true };
};
