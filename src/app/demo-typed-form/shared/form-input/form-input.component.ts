import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <label>
      <span>{{label}}</span>
      <input [formControl]="inputFormControl" [type]="type"/>
    </label>
  `,
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {


  @Input() public inputFormControl: FormControl;
  @Input() public label: string;
  @Input() public type: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
