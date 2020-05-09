import { TestBed } from '@angular/core/testing';

import { FunctionalService } from './functional.service';

describe('FunctionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionalService = TestBed.get(FunctionalService);
    expect(service).toBeTruthy();
  });
});
