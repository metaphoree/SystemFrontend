import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatusMgmtComponent } from './item-status-mgmt.component';

describe('ItemStatusMgmtComponent', () => {
  let component: ItemStatusMgmtComponent;
  let fixture: ComponentFixture<ItemStatusMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStatusMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStatusMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
