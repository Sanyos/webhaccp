import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDocumentsTableComponent } from './all-documents-table.component';

describe('AllDocumentsTableComponent', () => {
  let component: AllDocumentsTableComponent;
  let fixture: ComponentFixture<AllDocumentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDocumentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDocumentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
