import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpFormSecondComponent } from './haccp-form-second.component';

describe('HaccpFormComponent', () => {
  let component: HaccpFormSecondComponent;
  let fixture: ComponentFixture<HaccpFormSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HaccpFormSecondComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpFormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
