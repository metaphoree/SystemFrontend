import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncomeTypeComponent } from './edit-income-type.component';

describe('EditIncomeTypeComponent', () => {
  let component: EditIncomeTypeComponent;
  let fixture: ComponentFixture<EditIncomeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIncomeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIncomeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
