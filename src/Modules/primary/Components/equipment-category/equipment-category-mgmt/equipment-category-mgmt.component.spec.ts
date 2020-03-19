import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCategoryMgmtComponent } from './equipment-category-mgmt.component';

describe('EquipmentCategoryMgmtComponent', () => {
  let component: EquipmentCategoryMgmtComponent;
  let fixture: ComponentFixture<EquipmentCategoryMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentCategoryMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentCategoryMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
