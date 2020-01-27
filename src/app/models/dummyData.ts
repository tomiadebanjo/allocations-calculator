const boy = [
  {
    id: 1,
    name: 'rere',
    role: 'manager',
    managerId: null,
    managerName: 'None',
    staff: [
      {
        id: 2,
        name: 'James',
        role: 'developer',
        managerId: 1,
        managerName: 'rere',
        allocation: {
          userId: 2,
          id: 2,
          amount: 1000
        }
      },
      {
        id: 3,
        name: 'Tomi',
        role: 'developer',
        managerId: 1,
        managerName: 'rere',
        allocation: {
          userId: 3,
          id: 3,
          amount: 1000
        }
      }
    ],
    allocation: {
      userId: 1,
      id: 1,
      amount: 30000
    },
    totalAllocation: 32000
  }
];

const temp2 = [
  {
    id: 1,
    name: 'rere',
    role: 'manager',
    managerId: null,
    managerName: 'None',
    staff: [
      {
        id: 2,
        name: 'James',
        role: 'developer',
        managerId: 1,
        managerName: 'rere',
        allocation: {
          userId: 2,
          id: 2,
          amount: 1000
        }
      },
      {
        id: 3,
        name: 'Tomi',
        role: 'developer',
        managerId: 1,
        managerName: 'rere',
        allocation: {
          userId: 3,
          id: 3,
          amount: 1000
        }
      },
      {
        id: 4,
        name: 'hbjhbj',
        role: 'manager',
        managerId: 1,
        managerName: 'rere',
        staff: [
          {
            id: 5,
            name: 'nnm',
            role: 'developer',
            managerId: 4,
            managerName: 'hbjhbj',
            allocation: {
              userId: 5,
              id: 5,
              amount: 1000
            }
          }
        ],
        allocation: {
          userId: 4,
          id: 4,
          amount: 30000
        }
      }
    ],
    allocation: {
      userId: 1,
      id: 1,
      amount: 30000
    },
    totalAllocation: 63000
  }
];
