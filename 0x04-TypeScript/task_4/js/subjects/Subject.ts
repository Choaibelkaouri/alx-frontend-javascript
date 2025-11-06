/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    protected teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
