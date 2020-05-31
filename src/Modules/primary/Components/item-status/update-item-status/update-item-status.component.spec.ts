import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemStatusComponent } from './update-item-status.component';

describe('UpdateItemStatusComponent', () => {
  let component: UpdateItemStatusComponent;
  let fixture: ComponentFixture<UpdateItemStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateItemStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
