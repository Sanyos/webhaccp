import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpRestaurantComponent } from './haccp-restaurant.component';

describe('HaccpRestaurantComponent', () => {
  let component: HaccpRestaurantComponent;
  let fixture: ComponentFixture<HaccpRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
