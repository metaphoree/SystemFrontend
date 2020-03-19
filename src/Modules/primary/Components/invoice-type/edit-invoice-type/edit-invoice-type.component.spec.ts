import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoiceTypeComponent } from './edit-invoice-type.component';

describe('EditInvoiceTypeComponent', () => {
  let component: EditInvoiceTypeComponent;
  let fixture: ComponentFixture<EditInvoiceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInvoiceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvoiceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
