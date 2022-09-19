import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubHaccpFormComponent } from './pub-haccp-form.component';

describe('PubHaccpFormComponent', () => {
  let component: PubHaccpFormComponent;
  let fixture: ComponentFixture<PubHaccpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubHaccpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubHaccpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
