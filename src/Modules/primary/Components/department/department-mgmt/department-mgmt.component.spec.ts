import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMgmtComponent } from './department-mgmt.component';

describe('DepartmentMgmtComponent', () => {
  let component: DepartmentMgmtComponent;
  let fixture: ComponentFixture<DepartmentMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
