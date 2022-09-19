import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffetHaccpFormSecondComponent } from './buffet-haccp-form-second.component';

describe('BuffetHaccpFormSecondComponent', () => {
  let component: BuffetHaccpFormSecondComponent;
  let fixture: ComponentFixture<BuffetHaccpFormSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuffetHaccpFormSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffetHaccpFormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
