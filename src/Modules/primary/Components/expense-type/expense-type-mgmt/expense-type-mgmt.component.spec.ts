import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTypeMgmtComponent } from './expense-type-mgmt.component';

describe('ExpenseTypeMgmtComponent', () => {
  let component: ExpenseTypeMgmtComponent;
  let fixture: ComponentFixture<ExpenseTypeMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTypeMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTypeMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
