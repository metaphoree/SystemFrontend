import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentHomeComponent } from './customer-payment-home.component';

describe('CustomerPaymentHomeComponent', () => {
  let component: CustomerPaymentHomeComponent;
  let fixture: ComponentFixture<CustomerPaymentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaymentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
