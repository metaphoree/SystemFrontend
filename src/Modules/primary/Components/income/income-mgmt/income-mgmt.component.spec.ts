import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeMgmtComponent } from './income-mgmt.component';

describe('IncomeMgmtComponent', () => {
  let component: IncomeMgmtComponent;
  let fixture: ComponentFixture<IncomeMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
