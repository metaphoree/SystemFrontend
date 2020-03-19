import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceTypeComponent } from './add-invoice-type.component';

describe('AddInvoiceTypeComponent', () => {
  let component: AddInvoiceTypeComponent;
  let fixture: ComponentFixture<AddInvoiceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvoiceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
