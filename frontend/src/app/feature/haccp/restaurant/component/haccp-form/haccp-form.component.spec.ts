import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpFormComponent } from './haccp-form.component';

describe('HaccpFormComponent', () => {
  let component: HaccpFormComponent;
  let fixture: ComponentFixture<HaccpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
