import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMgmtComponent } from './supplier-mgmt.component';

describe('SupplierMgmtComponent', () => {
  let component: SupplierMgmtComponent;
  let fixture: ComponentFixture<SupplierMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
