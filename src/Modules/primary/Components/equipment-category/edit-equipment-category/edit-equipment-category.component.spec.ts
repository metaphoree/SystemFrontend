import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentCategoryComponent } from './edit-equipment-category.component';

describe('EditEquipmentCategoryComponent', () => {
  let component: EditEquipmentCategoryComponent;
  let fixture: ComponentFixture<EditEquipmentCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquipmentCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
