import {TypedControlConfig} from '../../typed-reactive-form/typed-control-config.type';
import {Department, Employee, EmployeeDto, Position} from '../models/employee.dto';
import {TypedFormGroup} from '../../typed-reactive-form/typed-form-group.model';
import {DEPARTMENT_CONFIG} from './department/department-config.const';
import {PARENT_EMPLOYEE_CONFIG} from './parent-cmployee/parent-employee-config.const';
import {POSITION_CONFIG} from './position-config.const';

export const FORM_CONFIG: TypedControlConfig<EmployeeDto> = {
  creationDate: ['212'],
  department: DEPARTMENT_CONFIG,
  email: ['email'],
  firstName: ['firstName'],
  lastName: ['lastName'],
  middleName: ['middleName'],
  parentEmployee: PARENT_EMPLOYEE_CONFIG,
  permissions: ['permissions'],
  phone: ['phone'],
  position: POSITION_CONFIG
};
