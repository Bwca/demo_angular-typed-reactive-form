import {TypedControlConfig} from '../../../typed-reactive-form/typed-control-config.type';
import {Position} from '../../models/employee.dto';
import {Validators} from '@angular/forms';

export const POSITION_CONFIG: TypedControlConfig<Position> = {
    actualFrom: ['actualFrom', Validators.required],
    actualTo: ['actualTo'],
    name: ['name']
};
