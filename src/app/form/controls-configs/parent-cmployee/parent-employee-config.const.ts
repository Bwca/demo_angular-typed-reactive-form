import {TypedControlConfig} from '../../../models/typed-reactive-form/typed-control-config.type';
import {Employee, Position} from '../../../models/employee.dto';
import {TypedFormGroup} from '../../../models/typed-reactive-form/typed-form-group.model';
import {POSITION_CONFIG} from './position-config.const';

export const PARENT_EMPLOYEE_CONFIG: TypedControlConfig<Employee> = {
  email: ['email'],
  firstName: ['firstName'],
  lastName: ['lastName'],
  middleName: ['middleName'],
  phone: ['phone'],
  position: this.fb.group(POSITION_CONFIG) as TypedFormGroup<Position>
};
