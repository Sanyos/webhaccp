import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffetHaccpFormComponent } from './buffet-haccp-form.component';

describe('BuffetHaccpFormComponent', () => {
  let component: BuffetHaccpFormComponent;
  let fixture: ComponentFixture<BuffetHaccpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuffetHaccpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffetHaccpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
