import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaccpPubComponent } from './haccp-pub.component';

describe('HaccpPubComponent', () => {
  let component: HaccpPubComponent;
  let fixture: ComponentFixture<HaccpPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaccpPubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaccpPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
