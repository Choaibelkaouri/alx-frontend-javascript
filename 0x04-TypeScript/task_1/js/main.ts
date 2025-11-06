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

// ✅ interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Regular function (not arrow)
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example
console.log(printTeacher("John", "Doe"));
