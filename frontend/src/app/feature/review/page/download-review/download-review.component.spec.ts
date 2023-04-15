import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadReviewComponent } from './download-review.component';

describe('DownloadReviewComponent', () => {
  let component: DownloadReviewComponent;
  let fixture: ComponentFixture<DownloadReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
