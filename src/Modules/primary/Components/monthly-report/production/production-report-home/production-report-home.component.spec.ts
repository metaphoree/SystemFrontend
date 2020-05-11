import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionReportHomeComponent } from './production-report-home.component';

describe('ProductionReportHomeComponent', () => {
  let component: ProductionReportHomeComponent;
  let fixture: ComponentFixture<ProductionReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
