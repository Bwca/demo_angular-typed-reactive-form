import {Component, Input, OnInit} from '@angular/core';
import {TypedFormGroup} from '../../../typed-reactive-form/models/typed-form-group.model';
import {Position} from '../../models/employee.dto';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  @Input() public positionForm: TypedFormGroup<Position>;

  constructor() { }

  ngOnInit(): void {
    console.log('position')
    console.log(this.positionForm)
  }

}
