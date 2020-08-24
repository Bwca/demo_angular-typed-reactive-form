import { Component, Input, OnInit } from '@angular/core';

import { TypedFormGroup } from 'ngx-typed-reactive-form';

import { Address } from '../../models/employee.dto';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() public addressForm: TypedFormGroup<Address>;
  ngOnInit(): void {
    this.addressForm.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }
}
