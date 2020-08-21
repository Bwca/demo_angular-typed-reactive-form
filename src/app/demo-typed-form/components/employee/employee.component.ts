import {Component, Input, OnInit} from '@angular/core';
import {TypedFormGroup} from '../../../typed-reactive-form/models/typed-form-group.model';
import {Address, Employee} from '../../models/employee.dto';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() public employeeForm: TypedFormGroup<Employee>;

  constructor() { }

  ngOnInit(): void {
    console.log('employeeForm')
    console.log(this.employeeForm)
  }

}
