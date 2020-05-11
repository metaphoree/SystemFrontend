import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievableReportComponent } from './recievable-report.component';

describe('RecievableReportComponent', () => {
  let component: RecievableReportComponent;
  let fixture: ComponentFixture<RecievableReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievableReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievableReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
