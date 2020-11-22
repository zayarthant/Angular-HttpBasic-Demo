export interface StudentModel {
    id?: number;
  name: string;
  password?: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

export const ROLES: string[] = ['USER', 'ADMIN'];
