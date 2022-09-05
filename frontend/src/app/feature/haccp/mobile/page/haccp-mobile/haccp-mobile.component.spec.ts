import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpMobileComponent } from './haccp-mobile.component';

describe('HaccpMobileComponent', () => {
  let component: HaccpMobileComponent;
  let fixture: ComponentFixture<HaccpMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
