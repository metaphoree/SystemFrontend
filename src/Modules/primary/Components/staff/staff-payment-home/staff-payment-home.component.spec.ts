import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPaymentHomeComponent } from './staff-payment-home.component';

describe('StaffPaymentHomeComponent', () => {
  let component: StaffPaymentHomeComponent;
  let fixture: ComponentFixture<StaffPaymentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffPaymentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPaymentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
