import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProductionComponent } from './staff-production.component';

describe('StaffProductionComponent', () => {
  let component: StaffProductionComponent;
  let fixture: ComponentFixture<StaffProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
