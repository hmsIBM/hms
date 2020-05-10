import { TestBed } from '@angular/core/testing';

import { DoctorserviceService } from './doctorservice.service';

describe('DoctorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorserviceService = TestBed.get(DoctorserviceService);
    expect(service).toBeTruthy();
  });
});
