import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  TypedFormBuilderConfig,
  TypedFormGroup,
} from 'ngx-typed-reactive-form';

import { AddressDto, ContactDto, UserDto } from '../models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class FormGeneratorService {
  constructor(private fb: FormBuilder) {}

  public buildUserFormGroup(
    user: TypedFormBuilderConfig<UserDto>
  ): TypedFormGroup<UserDto> {
    const contacts = this.buildContactsFormGroup(user.contacts);
    const form = this.fb.group({
      ...user,
      contacts,
      friends: this.fb.array([]),
    }) as TypedFormGroup<UserDto>;

    form.controls.friends.valueChanges.subscribe((i) => {
      console.log(i);
    });

    user.friends.forEach((i) => form.controls.friends.push(this.fb.group(i)));

    return form;
  }

  private buildContactsFormGroup(
    contacts: TypedFormBuilderConfig<ContactDto>
  ): FormGroup {
    const address = this.buildAddressFormGroup(contacts.address);
    return this.fb.group({ ...contacts, address });
  }

  private buildAddressFormGroup(
    address: TypedFormBuilderConfig<AddressDto>
  ): FormGroup {
    return this.fb.group(address);
  }
}
