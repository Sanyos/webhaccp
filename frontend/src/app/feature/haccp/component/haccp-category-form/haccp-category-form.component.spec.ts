import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpCategoryFormComponent } from './haccp-category-form.component';

describe('HaccpCategoryFormComponent', () => {
  let component: HaccpCategoryFormComponent;
  let fixture: ComponentFixture<HaccpCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpCategoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
