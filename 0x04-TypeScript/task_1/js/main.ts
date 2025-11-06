// 1) Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;       // always defined
  yearsOfExperience?: number;      // optional
  location: string;                // always defined
  [propName: string]: any;         // allow additional properties
}

// 2) Directors extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Example:
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

// 3) printTeacher + interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName[0]}. ${lastName}`;

// 4) StudentClass + interfaces for constructor & instance
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
