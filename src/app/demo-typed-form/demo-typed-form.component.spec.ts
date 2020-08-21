import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypedFormComponent } from './demo-typed-form.component';

describe('FormComponent', () => {
  let component: DemoTypedFormComponent;
  let fixture: ComponentFixture<DemoTypedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
