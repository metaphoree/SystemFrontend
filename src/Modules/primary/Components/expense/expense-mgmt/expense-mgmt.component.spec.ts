import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseMgmtComponent } from './expense-mgmt.component';

describe('ExpenseMgmtComponent', () => {
  let component: ExpenseMgmtComponent;
  let fixture: ComponentFixture<ExpenseMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
