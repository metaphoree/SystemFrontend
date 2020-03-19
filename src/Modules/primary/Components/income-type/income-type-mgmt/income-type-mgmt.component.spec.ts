import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTypeMgmtComponent } from './income-type-mgmt.component';

describe('IncomeTypeMgmtComponent', () => {
  let component: IncomeTypeMgmtComponent;
  let fixture: ComponentFixture<IncomeTypeMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeTypeMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTypeMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
