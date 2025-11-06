/**
 * Task 2: Advanced types (Director/Teacher classes + createEmployee),
 * Task 6: type predicate & executeWork,
 * Task 7: string literal types.
 */

// Interfaces for roles
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

// Implementations
export class Director implements DirectorInterface {
  workFromHome(): string { return 'Working from home'; }
  getCoffeeBreak(): string { return 'Getting a coffee break'; }
  workDirectorTasks(): string { return 'Getting to director tasks'; }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string { return 'Cannot work from home'; }
  getCoffeeBreak(): string { return 'Cannot have a break'; }
  workTeacherTasks(): string { return 'Getting to work'; }
}

// createEmployee
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

// Type predicate
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork
export function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

// String literal types
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}

// Demos (can be removed if needed; kept for clarity)
console.log(createEmployee(200) instanceof Teacher ? 'Teacher' : 'Director');
console.log(createEmployee(1000) instanceof Director ? 'Director' : 'Teacher');
console.log(createEmployee('$500') instanceof Director ? 'Director' : 'Teacher');

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass('Math'));
console.log(teachClass('History'));
