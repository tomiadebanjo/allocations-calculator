import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AllocationService } from '../service/allocation.service';

@Component({
  selector: 'app-allocations-tab-view',
  templateUrl: './allocations-tab-view.component.html',
  styleUrls: ['./allocations-tab-view.component.scss']
})
export class AllocationsTabViewComponent implements OnDestroy {
  isTable = true;
  teamMembersList;
  subscription: Subscription;

  constructor(private allocationService: AllocationService) {
    this.subscription = this.allocationService.users$.subscribe(() => {
      this.teamMembersList = this.allocationService.fetchAll();
    });
  }

  toggleTabs(value) {
    this.isTable = value;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
