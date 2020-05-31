import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuHorizontalComponent } from './side-menu-horizontal.component';

describe('SideMenuHorizontalComponent', () => {
  let component: SideMenuHorizontalComponent;
  let fixture: ComponentFixture<SideMenuHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
