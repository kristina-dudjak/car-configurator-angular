import { TestBed } from '@angular/core/testing';

import { CarElementService } from './car-element.service';

describe('CarElementService', () => {
  let service: CarElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
