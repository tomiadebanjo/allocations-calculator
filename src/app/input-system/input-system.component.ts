import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AllocationService } from '../service/allocation.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input-system',
  templateUrl: './input-system.component.html',
  styleUrls: ['./input-system.component.scss']
})
export class InputSystemComponent implements OnInit, OnDestroy {
  userSelectForm;
  managerList: User[];
  subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private allocationService: AllocationService
  ) {
    this.userSelectForm = this.formBuilder.group({
      name: '',
      role: '',
      managerId: ''
    });

    this.subscription = this.allocationService.users$.subscribe(value => {
      this.managerList = value.filter(i => i.role === 'manager');
    });
  }

  ngOnInit() {}

  onSubmit(data: any) {
    let managerId = null;
    if (data.managerId) {
      managerId = +data.managerId;
    }
    this.allocationService.addUser({ ...data, managerId });
    this.userSelectForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
