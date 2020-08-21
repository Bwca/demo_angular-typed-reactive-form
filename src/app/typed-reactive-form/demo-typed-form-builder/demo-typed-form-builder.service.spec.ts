import { TestBed } from '@angular/core/testing';

import { TypedFormGroupBuilderService } from './typed-form-group-builder.service';

describe('DemoTypedFormBuilderService', () => {
  let service: TypedFormGroupBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypedFormGroupBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
