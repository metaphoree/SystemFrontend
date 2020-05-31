import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusMgmtComponent } from './payment-status-mgmt.component';

describe('PaymentStatusMgmtComponent', () => {
  let component: PaymentStatusMgmtComponent;
  let fixture: ComponentFixture<PaymentStatusMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentStatusMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
