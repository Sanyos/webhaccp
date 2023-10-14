import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubHaccpFormSecondComponent } from './pub-haccp-form-second.component';

describe('PubHaccpFormSecondComponent', () => {
  let component: PubHaccpFormSecondComponent;
  let fixture: ComponentFixture<PubHaccpFormSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubHaccpFormSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubHaccpFormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
