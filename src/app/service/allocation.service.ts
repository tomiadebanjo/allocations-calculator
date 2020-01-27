import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Allocation } from '../models/allocation';
import { Role } from '../models/role';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  private usersSource = new BehaviorSubject<User[]>([]);
  private allocationsSource = new BehaviorSubject<Allocation[]>([]);

  users$ = this.usersSource.asObservable();
  allocations$ = this.allocationsSource.asObservable();

  constructor() {}

  private creationAllocation({ role, userId }: { role: Role; userId: number }) {
    const roleAmount = {
      manager: 30000,
      qaTester: 5000,
      developer: 1000
    };
    const allocations = this.allocationsSource.value;

    const oldAllocation = allocations.filter(a => a.userId === userId);
    if (!oldAllocation.length) {
      allocations.push({
        userId,
        id: allocations.length + 1,
        amount: roleAmount[role]
      });
    }

    this.allocationsSource.next(allocations);
  }

  addUser({
    name,
    role,
    managerId
  }: {
    name: string;
    role: Role;
    managerId?: number;
  }) {
    const users = this.usersSource.value;
    const id = users.length + 1;
    let managerName = 'None';
    if (managerId) {
      managerName = users.find(i => i.id === managerId).name;
    }
    const newUser = {
      id,
      name,
      role,
      managerId,
      managerName
    };
    users.push(newUser);
    this.creationAllocation({ role, userId: id });
    this.usersSource.next(users);
  }

  fetchUser(userId: number) {
    const users = this.usersSource.value;
    const allocations = this.allocationsSource.value;
    const user = users.filter(a => a.id === userId)[0];

    if (user.role === 'manager') {
      user.staff = users
        .filter(a => a.managerId === userId)
        .map(s => this.fetchUser(s.id));
    }

    user.allocation = allocations.filter(a => a.userId === userId)[0];

    if (user.role === 'manager' && user.staff.length) {
      user.totalAllocation = this.totalAllocation(user);
    }
    return user;
  }

  totalAllocation(item: User): number {
    let sum = 0;
    sum += item.allocation.amount;
    if (item.staff && item.staff.length) {
      item.staff.map(itemData => {
        sum += this.totalAllocation(itemData);
      });
    }
    return sum;
  }

  fetchAll(): User[] {
    const users = [];
    const userData = this.usersSource.value;
    userData
      .filter(a => a.managerId === null)
      .map(man => {
        const user = this.fetchUser(man.id);
        users.push(user);
      });
    return users;
  }

  calculateAllocationTotal(): number {
    const allocations = this.allocationsSource.value;
    return allocations.reduce((acc, curr) => {
      return acc + Number(curr.amount);
    }, 0);
  }
}
