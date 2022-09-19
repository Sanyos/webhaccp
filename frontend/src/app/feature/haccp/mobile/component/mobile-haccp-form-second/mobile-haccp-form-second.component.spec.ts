import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHaccpFormSecondComponent } from './mobile-haccp-form-second.component';

describe('MobileHaccpFormSecondComponent', () => {
  let component: MobileHaccpFormSecondComponent;
  let fixture: ComponentFixture<MobileHaccpFormSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHaccpFormSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHaccpFormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
