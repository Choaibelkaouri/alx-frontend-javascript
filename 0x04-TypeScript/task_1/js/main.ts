// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// 2. Director interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// 3. printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ✅ Test example
console.log(printTeacher("John", "Doe")); // Output: J. Doe
