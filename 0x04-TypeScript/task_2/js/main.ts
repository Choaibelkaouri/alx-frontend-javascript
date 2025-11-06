// 5) Advanced types, Director/Teacher + factory
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() { return 'Working from home'; }
  getCoffeeBreak() { return 'Getting a coffee break'; }
  workDirectorTasks() { return 'Getting to director tasks'; }
}

export class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home'; }
  getCoffeeBreak() { return 'Cannot have a break'; }
  workTeacherTasks() { return 'Getting to work'; }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

// 6) Type predicate + executeWork
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

// 7) String literal types + teachClass
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
