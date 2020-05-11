import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeReportHomeComponent } from './income-report-home.component';

describe('IncomeReportHomeComponent', () => {
  let component: IncomeReportHomeComponent;
  let fixture: ComponentFixture<IncomeReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
