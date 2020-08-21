import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoTypedFormComponent} from './demo-typed-form.component';
import {DepartmentComponent} from './components/department/department.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ParentEmployeeComponent } from './components/parent-employee/parent-employee.component';
import { PositionComponent } from './components/position/position.component';



@NgModule({
  declarations: [
    DemoTypedFormComponent,
    DepartmentComponent,
    ParentEmployeeComponent,
    PositionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DemoTypedFormComponent],
})
export class DemoTypedFormModule { }
