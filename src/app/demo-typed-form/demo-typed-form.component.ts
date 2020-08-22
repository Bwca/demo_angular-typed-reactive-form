import { Component, OnInit } from '@angular/core';

import { TypedFormGroupBuilderService } from '../typed-reactive-form/demo-typed-form-builder/typed-form-group-builder.service';
import { TypedFormGroup } from '../typed-reactive-form/models/typed-form-group.model';
import { EmployeeDto } from './models/employee.dto';
import { FORM_CONFIG } from './models/form-config.const';

@Component({
  selector: 'app-demo-typed-form',
  templateUrl: './demo-typed-form.component.html',
  styleUrls: ['./demo-typed-form.component.scss'],
})
export class DemoTypedFormComponent implements OnInit {
  public employeeFormGroup: TypedFormGroup<EmployeeDto>;

  constructor(private formBuilder: TypedFormGroupBuilderService) {}

  ngOnInit(): void {
    this.employeeFormGroup = this.formBuilder.buildFormGroupFromConfig<EmployeeDto>(FORM_CONFIG);
  }

  public onFormSubmit(): void {
    console.log('Typed submitted value');
    const value = this.employeeFormGroup.value;
    console.log(value);
  }
}
