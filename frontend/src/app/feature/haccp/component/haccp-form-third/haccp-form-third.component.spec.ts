import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpFormThirdComponent } from './haccp-form-third.component';

describe('HaccpFormThirdComponent', () => {
  let component: HaccpFormThirdComponent;
  let fixture: ComponentFixture<HaccpFormThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpFormThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpFormThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
