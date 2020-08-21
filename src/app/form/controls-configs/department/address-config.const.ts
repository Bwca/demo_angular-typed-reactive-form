import {TypedControlConfig} from '../../../models/typed-reactive-form/typed-control-config.type';
import {Address} from '../../../models/employee.dto';

export const ADDRESS_CONFIG: TypedControlConfig<Address> = {
    building: ['building'],
    city: ['city'],
    code: ['code'],
    country: ['country'],
    street: ['street']
};
