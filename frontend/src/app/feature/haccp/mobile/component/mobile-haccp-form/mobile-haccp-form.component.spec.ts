import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHaccpFormComponent } from './mobile-haccp-form.component';

describe('MobileHaccpFormComponent', () => {
  let component: MobileHaccpFormComponent;
  let fixture: ComponentFixture<MobileHaccpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHaccpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHaccpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
