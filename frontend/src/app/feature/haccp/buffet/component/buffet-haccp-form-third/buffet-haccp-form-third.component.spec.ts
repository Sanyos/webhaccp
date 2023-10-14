import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffetHaccpFormThirdComponent } from './buffet-haccp-form-third.component';

describe('BuffetHaccpFormThirdComponent', () => {
  let component: BuffetHaccpFormThirdComponent;
  let fixture: ComponentFixture<BuffetHaccpFormThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuffetHaccpFormThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffetHaccpFormThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
