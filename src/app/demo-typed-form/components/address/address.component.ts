import {Component, Input, OnInit} from '@angular/core';
import {TypedFormGroup} from '../../../typed-reactive-form/models/typed-form-group.model';
import {Address} from '../../models/employee.dto';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() public addressForm: TypedFormGroup<Address>;


  constructor() { }

  ngOnInit(): void {

    console.log('addressForm')
    console.log(this.addressForm)
  }

}
