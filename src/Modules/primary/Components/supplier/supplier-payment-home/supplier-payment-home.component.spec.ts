import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPaymentHomeComponent } from './supplier-payment-home.component';

describe('SupplierPaymentHomeComponent', () => {
  let component: SupplierPaymentHomeComponent;
  let fixture: ComponentFixture<SupplierPaymentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierPaymentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPaymentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
