import {TypedControlConfig} from '../../../typed-reactive-form/typed-control-config.type';
import {Address, Department} from '../../models/employee.dto';
import {TypedFormGroup} from '../../../typed-reactive-form/typed-form-group.model';
import {ADDRESS_CONFIG} from './address-config.const';

export const DEPARTMENT_CONFIG: TypedControlConfig<Department> = {
  address: ADDRESS_CONFIG,
  name: ['name'],
  phone: ['phone'],
};
