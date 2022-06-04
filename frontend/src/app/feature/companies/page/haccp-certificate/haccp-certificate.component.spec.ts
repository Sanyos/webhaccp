import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpCertificateComponent } from './haccp-certificate.component';

describe('HaccpCertificateComponent', () => {
  let component: HaccpCertificateComponent;
  let fixture: ComponentFixture<HaccpCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HaccpCertificateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
