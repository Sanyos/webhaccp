import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHaccpFormThirdComponent } from './mobile-haccp-form-third.component';

describe('MobileHaccpFormThirdComponent', () => {
  let component: MobileHaccpFormThirdComponent;
  let fixture: ComponentFixture<MobileHaccpFormThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHaccpFormThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHaccpFormThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
