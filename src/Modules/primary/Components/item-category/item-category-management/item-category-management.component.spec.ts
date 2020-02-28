import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoryManagementComponent } from './item-category-management.component';

describe('ItemCategoryManagementComponent', () => {
  let component: ItemCategoryManagementComponent;
  let fixture: ComponentFixture<ItemCategoryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCategoryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
