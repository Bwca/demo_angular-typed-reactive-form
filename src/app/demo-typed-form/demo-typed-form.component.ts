import { Component, OnInit } from '@angular/core';

import { TypedFormGroup } from 'ngx-typed-reactive-form';

import { FormGeneratorService } from './form-generator/form-generator.service';
import { USER_FORM_CONFIG } from './models/user-form.config';
import { UserDto } from './models/user.dto';

@Component({
  selector: 'app-demo-typed-form',
  templateUrl: './demo-typed-form.component.html',
  styleUrls: ['./demo-typed-form.component.scss'],
})
export class DemoTypedFormComponent implements OnInit {
  public userFormGroup: TypedFormGroup<UserDto>;

  constructor(private formGeneratorService: FormGeneratorService) {}

  ngOnInit(): void {
    this.userFormGroup = this.formGeneratorService.buildUserFormGroup(
      USER_FORM_CONFIG
    );
  }

  public onFormSubmit(): void {
    console.log('Typed submitted value');
    console.log(this.userFormGroup);
  }
}
