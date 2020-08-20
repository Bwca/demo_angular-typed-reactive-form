import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TypedFormGroup} from './models/typed-reactive-form/typed-form-group.model';
import {Address, Department, Employee, EmployeeDto, Position} from './models/employee.dto';
import {TypedControlConfig} from './models/typed-reactive-form/typed-control-config.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employeeFormGroup: TypedFormGroup<EmployeeDto>;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeFormGroup();
  }


  private initializeFormGroup(): void {
    const addressPayload: TypedControlConfig<Address> = {
      building: ['building'],
      city: ['city'],
      code: ['code'],
      country: ['country'],
      street: ['street']
    };

    const departmentPayload: TypedControlConfig<Department> = {
      address: this.fb.group(addressPayload) as TypedFormGroup<Address>,
      name: ['name'],
      phone: ['phone'],
    };

    const parentEmployeePositionPayload: TypedControlConfig<Position> = {
      actualFrom: ['actualFrom', Validators.required],
      actualTo: ['actualTo'],
      name: ['name']
    };

    const parentEmployeePayload: TypedControlConfig<Employee> = {
      email: ['email'],
      firstName: ['firstName'],
      lastName: ['lastName'],
      middleName: ['middleName'],
      phone: ['phone'],
      position: this.fb.group(parentEmployeePositionPayload) as TypedFormGroup<Position>
    };

    const employeePositionPayload: TypedControlConfig<Position> = {
      name: ['name'],
      actualTo: ['actualTo'],
      actualFrom: ['actualFrom']
    };

    const fbPayload: TypedControlConfig<EmployeeDto> = {
      creationDate: ['212'],
      department: this.fb.group(departmentPayload) as TypedFormGroup<Department>,
      email: ['email'],
      firstName: ['firstName'],
      lastName: ['lastName'],
      middleName: ['middleName'],
      parentEmployee: this.fb.group(parentEmployeePayload) as TypedFormGroup<Employee>,
      permissions: ['permissions'],
      phone: ['phone'],
      position: this.fb.group(employeePositionPayload) as TypedFormGroup<Position>
    };

    this.employeeFormGroup = this.fb.group(fbPayload) as TypedFormGroup<EmployeeDto>;

    const dep = this.employeeFormGroup.get<Department>('department');

    const address = dep.get<Address>('address');

    const x = address.get('code');

    console.log(x.value);

    console.log(dep.value);
  }
}
