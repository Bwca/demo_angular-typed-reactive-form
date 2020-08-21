import {TypedControlConfig} from '../../models/typed-reactive-form/typed-control-config.type';
import {Department, Employee, EmployeeDto, Position} from '../../models/employee.dto';
import {TypedFormGroup} from '../../models/typed-reactive-form/typed-form-group.model';
import {DEPARTMENT_CONFIG} from './department/department-config.const';
import {PARENT_EMPLOYEE_CONFIG} from './parent-cmployee/parent-employee-config.const';
import {POSITION_CONFIG} from './position-config.const';

const FORM_CONFIG: TypedControlConfig<EmployeeDto> = {
  creationDate: ['212'],
  department: this.fb.group(DEPARTMENT_CONFIG) as TypedFormGroup<Department>,
  email: ['email'],
  firstName: ['firstName'],
  lastName: ['lastName'],
  middleName: ['middleName'],
  parentEmployee: this.fb.group(PARENT_EMPLOYEE_CONFIG) as TypedFormGroup<Employee>,
  permissions: ['permissions'],
  phone: ['phone'],
  position: this.fb.group(POSITION_CONFIG) as TypedFormGroup<Position>
};
