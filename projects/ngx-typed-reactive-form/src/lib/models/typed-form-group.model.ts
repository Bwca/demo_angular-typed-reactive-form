import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export interface TypedFormGroup<T> extends FormGroup {
  value: Partial<T>;
  valueChanges: Observable<Partial<T>>;

  setValue(val: T): void;

  getRawValue(): T;

  patchValue(val: Partial<T>): void;

  get<K>(
    path: keyof T & string
  ): K extends unknown ? FormControl : TypedFormGroup<K>;
}
