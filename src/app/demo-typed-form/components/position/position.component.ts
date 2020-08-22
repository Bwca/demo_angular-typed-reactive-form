import { Component, Input, OnInit } from '@angular/core';

import { TypedFormGroup } from 'ngx-typed-reactive-form';

import { Position } from '../../models/employee.dto';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
})
export class PositionComponent implements OnInit {
  @Input() public positionForm: TypedFormGroup<Position>;

  ngOnInit(): void {
    this.positionForm.valueChanges.subscribe((val) => {
      console.log('Typed form value');
      console.log(val);
    });
  }
}
