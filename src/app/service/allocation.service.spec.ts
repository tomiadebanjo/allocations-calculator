import { AllocationService } from './allocation.service';

describe('AllocationService', () => {
  let service: AllocationService;

  beforeEach(() => {
    service = new AllocationService();
  });

  it('should have no users', done => {
    service.users$.subscribe(value => {
      expect(value.length).toBe(0);
    });

    done();
  });

  it('should have no allocations', done => {
    service.allocations$.subscribe(value => {
      expect(value.length).toBe(0);
    });

    done();
  });

  it('should add user when the addUser method is called', done => {
    service.addUser({ name: 'Tomi', role: 'manager' });

    service.users$.subscribe(value => {
      expect(value.length).toBe(1);
      expect(value[0].name).toBe('Tomi');
    });
    done();
  });

  it('should fetch user with provided id', done => {
    service.addUser({ name: 'Tomi', role: 'manager' });

    const payload = service.fetchUser(1);

    expect(payload.id).toEqual(1);
    expect(payload.name).toEqual('Tomi');
    expect(payload.role).toEqual('manager');
    expect(payload.managerId).toEqual(undefined);
    expect(payload.staff.length).toEqual(0);
    done();
  });

  it('should return total number of allocations for a user', done => {
    service.addUser({ name: 'Tomi', role: 'manager' });
    const user = service.fetchUser(1);
    const allocation = service.totalAllocation(user);
    expect(allocation).toEqual(30000);
    done();
  });

  it('should fetch all users', done => {
    service.addUser({ name: 'Tomi', role: 'manager', managerId: null });
    service.addUser({ name: 'JOJI', role: 'manager', managerId: 1 });

    expect(service.fetchAll().length).toEqual(1);
    done();
  });

  it('should calculate the allocation total', done => {
    service.addUser({ name: 'Tomi', role: 'manager', managerId: null });
    service.addUser({ name: 'JOJI', role: 'manager', managerId: 1 });

    expect(service.calculateAllocationTotal()).toEqual(60000);
    done();
  });
});
