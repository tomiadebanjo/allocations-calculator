import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationsNestedViewComponent } from './allocations-nested-view.component';

describe('AllocationsNestedViewComponent', () => {
  let component: AllocationsNestedViewComponent;
  let fixture: ComponentFixture<AllocationsNestedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationsNestedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationsNestedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
