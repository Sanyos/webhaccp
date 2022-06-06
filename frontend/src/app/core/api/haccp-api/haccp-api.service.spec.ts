import { TestBed } from '@angular/core/testing';

import { HaccpApiService } from './haccp-api.service';

describe('HaccpApiService', () => {
  let service: HaccpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaccpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
