import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationsListComponent } from './allocations-list.component';

describe('AllocationsListComponent', () => {
  let component: AllocationsListComponent;
  let fixture: ComponentFixture<AllocationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
