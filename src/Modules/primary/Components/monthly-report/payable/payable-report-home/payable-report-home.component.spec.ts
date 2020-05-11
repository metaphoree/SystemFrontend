import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableReportHomeComponent } from './payable-report-home.component';

describe('PayableReportHomeComponent', () => {
  let component: PayableReportHomeComponent;
  let fixture: ComponentFixture<PayableReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayableReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayableReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
