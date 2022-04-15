import { TestBed } from '@angular/core/testing';

import { EnumsApiService } from './enums-api.service';

describe('EnumsApiService', () => {
  let service: EnumsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
