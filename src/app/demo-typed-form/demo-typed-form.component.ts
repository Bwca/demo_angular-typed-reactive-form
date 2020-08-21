import {Component, OnInit} from '@angular/core';
import {TypedFormGroup} from '../typed-reactive-form/models/typed-form-group.model';
import {Address, Department, EmployeeDto, Position} from './models/employee.dto';
import {FormBuilder, Validators} from '@angular/forms';
import {FORM_CONFIG} from './models/form-config.const';
import {TypedControlConfig} from '../typed-reactive-form/models/typed-control-config.type';
import {TypedFormGroupBuilderService} from '../typed-reactive-form/demo-typed-form-builder/typed-form-group-builder.service';


@Component({
  selector: 'app-demo-typed-form',
  templateUrl: './demo-typed-form.component.html',
  styleUrls: ['./demo-typed-form.component.scss']
})
export class DemoTypedFormComponent implements OnInit {

  public employeeFormGroup: TypedFormGroup<EmployeeDto>;

  constructor(
    private formBuilder: TypedFormGroupBuilderService
  ) {
  }

  ngOnInit(): void {
    this.employeeFormGroup = this.formBuilder.buildFormGroupFromConfig<EmployeeDto>(FORM_CONFIG);
  }

}
