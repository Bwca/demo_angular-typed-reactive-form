import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {TypedFormGroup} from '../models/typed-form-group.model';
import {EmployeeDto} from '../../demo-typed-form/models/employee.dto';
import {TypedControlConfig} from '../models/typed-control-config.type';
import {FORM_CONFIG} from '../../demo-typed-form/models/form-config.const';

@Injectable({
  providedIn: 'root'
})
export class TypedFormGroupBuilderService {

  constructor(
    private fb: FormBuilder
  ) {
  }

  public buildFormGroupFromConfig<T>(formConfig: TypedControlConfig<T>): TypedFormGroup<T> {
    const config: TypedControlConfig<T> = {} as TypedControlConfig<T>;
    Object.entries(formConfig).forEach(([key, value]) => {
      const valueIsArrayOrPrimitive = Array.isArray(value) || typeof value !== 'object';
      config[key] = valueIsArrayOrPrimitive ? value : this.buildFormGroupFromConfig<typeof value>(value);
    });
    return this.fb.group(config) as TypedFormGroup<T>;
  }
}
