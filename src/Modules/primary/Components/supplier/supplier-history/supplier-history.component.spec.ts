import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierHistoryComponent } from './supplier-history.component';

describe('SupplierHistoryComponent', () => {
  let component: SupplierHistoryComponent;
  let fixture: ComponentFixture<SupplierHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
