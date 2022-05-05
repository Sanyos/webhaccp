import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompaniesTableComponent } from './all-companies-table.component';

describe('AllCompaniesTableComponent', () => {
  let component: AllCompaniesTableComponent;
  let fixture: ComponentFixture<AllCompaniesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCompaniesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCompaniesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
