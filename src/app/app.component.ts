import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {TypedFormGroup} from './models/typed-reactive-form/typed-form-group.model';
import {Address, Department, EmployeeDto} from './models/employee.dto';
import {TypedControlConfig} from './models/typed-reactive-form/typed-control-config.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employeeFormGroupOne: TypedFormGroup<EmployeeDto>;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initFormOne();
  }

  private initFormOne(): void {
    const fbPayload: TypedControlConfig<EmployeeDto> = {
      creationDate: ['creationDate'],
      department: {
        address: {
          building: ['building'],
          city: ['city'],
          code: ['code'],
          country: ['country'],
          street: ['street']
        },
        name: ['name'],
        phone: ['phone'],
        updateDate: ['updateDate']
      },
      email: ['email'],
      firstName: ['firstName'],
      id: [1],
      lastName: ['lastName'],
      middleName: ['middleName'],
      parentEmployee: {
        email: ['email'],
        firstName: ['firstName'],
        lastName: ['lastName'],
        middleName: ['middleName'],
        phone: ['phone'],
        position: {
          actualFrom: ['actualFrom'],
          actualTo: ['actualTo'],
          name: ['name']
        }
      },
      permissions: ['permissions'],
      phone: ['phone'],
      position: {
        name: ['name'],
        actualTo: ['actualTo'],
        actualFrom: ['actualFrom']
      }
    };

    this.employeeFormGroupOne = this.fb.group(fbPayload) as TypedFormGroup<EmployeeDto>;
  }
}
