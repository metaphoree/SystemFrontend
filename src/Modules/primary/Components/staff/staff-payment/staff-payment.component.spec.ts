import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPaymentComponent } from './staff-payment.component';

describe('StaffPaymentComponent', () => {
  let component: StaffPaymentComponent;
  let fixture: ComponentFixture<StaffPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
