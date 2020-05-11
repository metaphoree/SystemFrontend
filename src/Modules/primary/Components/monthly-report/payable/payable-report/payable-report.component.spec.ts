import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableReportComponent } from './payable-report.component';

describe('PayableReportComponent', () => {
  let component: PayableReportComponent;
  let fixture: ComponentFixture<PayableReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayableReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayableReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
