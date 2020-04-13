import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProductionHomeComponent } from './staff-production-home.component';

describe('StaffProductionHomeComponent', () => {
  let component: StaffProductionHomeComponent;
  let fixture: ComponentFixture<StaffProductionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffProductionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProductionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
