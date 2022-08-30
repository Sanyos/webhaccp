import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadHaccpComponent } from './download-haccp.component';

describe('DownloadHaccpComponent', () => {
  let component: DownloadHaccpComponent;
  let fixture: ComponentFixture<DownloadHaccpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadHaccpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadHaccpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
