import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryMgmtComponent } from './factory-mgmt.component';

describe('FactoryMgmtComponent', () => {
  let component: FactoryMgmtComponent;
  let fixture: ComponentFixture<FactoryMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
