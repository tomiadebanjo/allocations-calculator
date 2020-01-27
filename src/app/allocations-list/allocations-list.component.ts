import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { AllocationService } from '../service/allocation.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-allocations-list',
  templateUrl: './allocations-list.component.html',
  styleUrls: ['./allocations-list.component.scss']
})
export class AllocationsListComponent implements OnInit, OnDestroy {
  items: User[];
  subscription: Subscription;

  constructor(private allocationService: AllocationService) {
    this.subscription = this.allocationService.users$.subscribe(value => {
      this.items = value;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
