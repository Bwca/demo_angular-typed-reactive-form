import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

import {
  TypedFormControl,
  TypedFormGroupBuilderService,
} from 'ngx-typed-reactive-form';
import { TypedFormGroup } from 'ngx-typed-reactive-form';

import { USER_FORM_CONFIG } from './models/user-form.config';
import { FriendDto, UserDto } from './models/user.dto';

@Component({
  selector: 'app-demo-typed-form',
  templateUrl: './demo-typed-form.component.html',
  styleUrls: ['./demo-typed-form.component.scss'],
})
export class DemoTypedFormComponent implements OnInit {
  public userFormGroup: TypedFormGroup<UserDto>;

  constructor(
    private formBuilder: TypedFormGroupBuilderService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    /* this.userFormGroup = this.formBuilder.buildFormGroupFromConfig<UserDto>(
      USER_FORM_CONFIG
    ); */

    this.userFormGroup = this.fb.group({
      ...USER_FORM_CONFIG,
      contacts: this.fb.group({
        ...USER_FORM_CONFIG.contacts,
        address: this.fb.group({
          ...USER_FORM_CONFIG.contacts.address,
        }),
      }),
      friends: this.fb.array(
        [ ]
      ),
    }) as TypedFormGroup<UserDto>;

    USER_FORM_CONFIG.friends[0].forEach((i) => console.log(i));
    USER_FORM_CONFIG.friends[0].forEach((i) => {

      this.userFormGroup.controls.friends.push(
        this.fb.group(i)
      );
    });

    console.log(this.userFormGroup.controls.friends.controls);
  }

  public onFormSubmit(): void {
    console.log('Typed submitted value');
    const value = this.userFormGroup.value;
    console.log(value);
  }
}
