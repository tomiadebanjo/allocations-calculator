import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationsTabViewComponent } from './allocations-tab-view.component';

describe('AllocationsTabViewComponent', () => {
  let component: AllocationsTabViewComponent;
  let fixture: ComponentFixture<AllocationsTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationsTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationsTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
