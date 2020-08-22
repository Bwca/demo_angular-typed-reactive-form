import { Validators } from '@angular/forms';

import { TypedControlConfig } from '../../typed-reactive-form/models/typed-control-config.type';
import { EmployeeDto } from './employee.dto';

export const FORM_CONFIG: TypedControlConfig<EmployeeDto> = {
  creationDate: ['212'],
  department: {
    address: {
      building: ['building'],
      city: ['city'],
      code: ['code'],
      country: ['country'],
      street: ['street'],
    },
    name: ['name'],
    phone: ['phone'],
  },
  email: ['email'],
  firstName: ['firstName'],
  lastName: ['lastName'],
  middleName: ['middleName'],
  parentEmployee: {
    email: ['email'],
    firstName: ['firstName'],
    lastName: ['lastName'],
    middleName: ['middleName'],
    phone: ['phone'],
    position: {
      actualFrom: ['actualFrom', Validators.required],
      actualTo: ['actualTo'],
      name: ['name'],
    },
  },
  permissions: ['permissions'],
  phone: ['phone'],
  position: {
    actualFrom: ['actualFrom', Validators.required],
    actualTo: ['actualTo'],
    name: ['name'],
  },
};
