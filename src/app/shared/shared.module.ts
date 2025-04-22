import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TogglePasswordDirective} from "@shared/directives/toggle-password.directive";
import {DurationPipe} from "@shared/pipes/duration.pipe";
import {CustomDatePipe} from "@shared/pipes/custom-date.pipe";
import {EmailValidatorDirective} from "@shared/directives/email.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EmailValidatorDirective,
    TogglePasswordDirective,
    DurationPipe,
    CustomDatePipe,
  ],
  exports: [
    EmailValidatorDirective,
    TogglePasswordDirective,
    DurationPipe,
    CustomDatePipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
