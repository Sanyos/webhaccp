import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubHaccpFormThirdComponent } from './pub-haccp-form-third.component';

describe('PubHaccpFormThirdComponent', () => {
  let component: PubHaccpFormThirdComponent;
  let fixture: ComponentFixture<PubHaccpFormThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubHaccpFormThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubHaccpFormThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
