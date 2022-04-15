import { TestBed } from '@angular/core/testing';

import { SweetAlertPopupService } from './sweet-alert-popup.service';

describe('SweetAlertPopupService', () => {
  let service: SweetAlertPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetAlertPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
