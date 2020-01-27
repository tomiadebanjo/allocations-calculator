import { Role } from './role';
import { Allocation } from './allocation';

export interface User {
  id: number;
  name: string;
  role: Role;
  managerId: number | null;
  managerName?: string;
  staff?: User[];
  allocation?: Allocation;
}
