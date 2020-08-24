import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <label>
      <span>{{ label }}:</span>
      <input
        [formControl]="inputFormControl"
        [type]="type"
        [ngClass]="{
          'is-valid': inputFormControl.touched && inputFormControl.valid,
          'is-invalid': inputFormControl.touched && inputFormControl.invalid
        }"
      />
    </label>
  `,
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() public inputFormControl: FormControl;
  @Input() public label: string;
  @Input() public type: 'string';
}
