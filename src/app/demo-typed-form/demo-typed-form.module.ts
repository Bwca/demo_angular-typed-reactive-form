import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoTypedFormComponent} from './demo-typed-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DepartmentComponent } from './components/department/department.component';
import { AddressComponent } from './components/address/address.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PositionComponent } from './components/position/position.component';


@NgModule({
  declarations: [
    DemoTypedFormComponent,
    DepartmentComponent,
    AddressComponent,
    EmployeeComponent,
    PositionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DemoTypedFormComponent],
})
export class DemoTypedFormModule {
}
