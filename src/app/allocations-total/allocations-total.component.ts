import { Component, OnInit, OnDestroy } from '@angular/core';
import { AllocationService } from '../service/allocation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-allocations-total',
  templateUrl: './allocations-total.component.html',
  styleUrls: ['./allocations-total.component.scss']
})
export class AllocationsTotalComponent implements OnInit, OnDestroy {
  totalAmount = 0;
  subscription: Subscription;

  constructor(private allocationService: AllocationService) {
    this.subscription = this.allocationService.allocations$.subscribe(() => {
      this.totalAmount = this.allocationService.calculateAllocationTotal();
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
