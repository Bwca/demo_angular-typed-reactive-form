import { Component, Input, OnInit } from '@angular/core';

import { TypedFormGroup } from '../../../typed-reactive-form/models/typed-form-group.model';
import { Employee } from '../../models/employee.dto';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  @Input() public employeeForm: TypedFormGroup<Employee>;

  ngOnInit(): void {
    this.employeeForm.valueChanges.subscribe((val) => {
      console.log('Typed form value');
      console.log(val);
    });
  }
}
