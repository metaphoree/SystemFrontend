import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReportHomeComponent } from './transaction-report-home.component';

describe('TransactionReportHomeComponent', () => {
  let component: TransactionReportHomeComponent;
  let fixture: ComponentFixture<TransactionReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
