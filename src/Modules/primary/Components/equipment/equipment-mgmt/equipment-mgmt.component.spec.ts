import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMgmtComponent } from './equipment-mgmt.component';

describe('EquipmentMgmtComponent', () => {
  let component: EquipmentMgmtComponent;
  let fixture: ComponentFixture<EquipmentMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
