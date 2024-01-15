

export enum Department {
  HR = 'HR',
  PS = 'PS',
  AC = 'AC',
  IT = 'IT'
}

export interface Employee {
  id: number;
  name: string;
  salary:  number;
  department: Department;
  // department: 'HR' | 'PS'
}
