import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = control.value;
    if (!value || emailRegexp.test(value)) {
      return null;
    }
    return { invalidEmail: true };
  }
}
