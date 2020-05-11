import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseReportHomeComponent } from './expense-report-home.component';

describe('ExpenseReportHomeComponent', () => {
  let component: ExpenseReportHomeComponent;
  let fixture: ComponentFixture<ExpenseReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
