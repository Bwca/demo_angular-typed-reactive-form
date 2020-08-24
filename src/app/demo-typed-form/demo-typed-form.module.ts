import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoTypedFormComponent } from './demo-typed-form.component';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  declarations: [
    DemoTypedFormComponent,
    FormInputComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DemoTypedFormComponent],
})
export class DemoTypedFormModule {}
