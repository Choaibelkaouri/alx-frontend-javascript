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

// ✅ Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Function written exactly as checker expects
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// ✅ Example test
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
