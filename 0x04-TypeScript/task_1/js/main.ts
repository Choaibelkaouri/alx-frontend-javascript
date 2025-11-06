/**
 * Task 1: Teacher interface, Directors extends, printTeacher, StudentClass
 */

// Teacher interface with readonly names, required fullTimeEmployee & location, optional yearsOfExperience
// and index signature for extra properties.
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors extends Teacher with numberOfReports
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Example instance with extra property (contract)
export const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// printTeacher function + function type interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

// StudentClass constructor & class interfaces
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  constructor(private _firstName: string, private _lastName: string) {}
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this._firstName;
  }
}

// Example: Director object as required by task 2 (placed here but used later too)
export const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher3);
console.log(printTeacher('John', 'Doe'));
console.log(new StudentClass('Jane', 'Doe').displayName());
console.log(director1);
