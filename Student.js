import Course from './Course.js';

class Student {

  courses = [];

  constructor(name) {
     this.name = name;
  }
 
  addGrade(course, grade) {
    let c = this.courses.find((c) => c.name == course);
    if (!c) {
      c = new Course(course);
      this.courses.push(c);
    }

    c.addGrade(grade);
  }

  totals() {
    console.log('Grades for %s', this.name);
    this.courses.forEach(c => {      
      c.total();
    });
  }
}

export default Student;