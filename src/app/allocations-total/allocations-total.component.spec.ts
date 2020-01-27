import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationsTotalComponent } from './allocations-total.component';

describe('AllocationsTotalComponent', () => {
  let component: AllocationsTotalComponent;
  let fixture: ComponentFixture<AllocationsTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationsTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
