import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentStatusComponent } from './add-payment-status.component';

describe('AddPaymentStatusComponent', () => {
  let component: AddPaymentStatusComponent;
  let fixture: ComponentFixture<AddPaymentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaymentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
