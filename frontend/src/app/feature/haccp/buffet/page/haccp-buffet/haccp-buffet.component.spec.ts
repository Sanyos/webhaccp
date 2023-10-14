import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpBuffetComponent } from './haccp-buffet.component';

describe('HaccpBuffetComponent', () => {
  let component: HaccpBuffetComponent;
  let fixture: ComponentFixture<HaccpBuffetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpBuffetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpBuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
