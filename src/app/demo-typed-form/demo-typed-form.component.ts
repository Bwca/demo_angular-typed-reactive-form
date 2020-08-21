import {Component, OnInit} from '@angular/core';
import {TypedFormGroup} from '../typed-reactive-form/typed-form-group.model';
import {Address, Department, EmployeeDto, Position} from './models/employee.dto';
import {FormBuilder, Validators} from '@angular/forms';
import {FORM_CONFIG} from './controls-configs/form-config.const';
import {TypedControlConfig} from '../typed-reactive-form/typed-control-config.type';


@Component({
  selector: 'app-demo-typed-form',
  templateUrl: './demo-typed-form.component.html',
  styleUrls: ['./demo-typed-form.component.scss']
})
export class DemoTypedFormComponent implements OnInit {


  employeeFormGroup: TypedFormGroup<EmployeeDto>;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {



    this.employeeFormGroup = this.fb.group({
      ...FORM_CONFIG,
      department: {}
    }) as TypedFormGroup<EmployeeDto>;
    console.log(this.employeeFormGroup);
  }

}
