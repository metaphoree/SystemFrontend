import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatusChangeComponent } from './item-status-change.component';

describe('ItemStatusChangeComponent', () => {
  let component: ItemStatusChangeComponent;
  let fixture: ComponentFixture<ItemStatusChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStatusChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStatusChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
