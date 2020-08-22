import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TypedFormGroup } from '../../../typed-reactive-form/models/typed-form-group.model';

@Component({
  selector: 'app-form-input',
  template: `
    <label>
      <span>{{ label }}</span>
      <input [formControl]="inputFormControl" [type]="type"/>
    </label>
  `,
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input('inputFormControl')
  public set setFormControl(formControl: TypedFormGroup<unknown>) {
    this.inputFormControl = (formControl) as unknown as FormControl;
  }

  @Input() public label: string;
  @Input() public type: string;

  public inputFormControl: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }
}
