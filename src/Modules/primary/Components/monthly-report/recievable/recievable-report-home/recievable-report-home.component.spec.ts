import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievableReportHomeComponent } from './recievable-report-home.component';

describe('RecievableReportHomeComponent', () => {
  let component: RecievableReportHomeComponent;
  let fixture: ComponentFixture<RecievableReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievableReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievableReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
