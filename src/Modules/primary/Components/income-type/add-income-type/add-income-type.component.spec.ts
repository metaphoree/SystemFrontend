import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncomeTypeComponent } from './add-income-type.component';

describe('AddIncomeTypeComponent', () => {
  let component: AddIncomeTypeComponent;
  let fixture: ComponentFixture<AddIncomeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncomeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIncomeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
