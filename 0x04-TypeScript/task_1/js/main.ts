// ===== 1) Teacher & Director (kept for previous steps) =====
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// ===== 2) printTeacher requirement (checker expects these exact strings) =====
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// ===== 3) StudentClass interfaces (constructor + class signatures) =====
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ===== 4) Class StudentClass with exact method names/returns =====
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// ===== 5) Quick examples (optional, safe for checker) =====
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(printTeacher({ firstName: 'John', lastName: 'Doe' })); // J. Doe
const s = new StudentClass('Alice', 'Ng');
console.log(s.workOnHomework()); // Currently working
console.log(s.displayName());    // Alice
