import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMgmtComponent } from './staff-mgmt.component';

describe('StaffMgmtComponent', () => {
  let component: StaffMgmtComponent;
  let fixture: ComponentFixture<StaffMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
