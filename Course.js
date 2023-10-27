class Course {

  grades = [];

  constructor(name) {
     this.name = name;
  }
 
  addGrade(grade) {
    this.grades.push(Number.parseFloat(grade));
  }

  total() {
    let count = this.grades.length;
    let total = this.grades.reduce((prev, curr) => prev + curr, 0);
    let avg = (total / count);
    console.log('%s - %d exams - %d avg', this.name, count, avg);
  }
}

export default Course;