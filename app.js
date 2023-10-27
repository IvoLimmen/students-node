import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import Course from './Course.js';
import Student from './Student.js';

const rl = readline.createInterface({ input, output });

function help() {
  console.log("Grading system");
  console.log("add-student [name] - Add student");
  console.log("select-student [name] - Select a student");
  console.log("add-grade [course] [grade] - Add a grade for a course for the current selected student");
  console.log("end - Stop the program");
}

let command = null;
let students = [];
let student = null;

while (true) {

  command = await rl.question('Input command:');

  if (command == null) {
    console.log('Please enter a valid command');
    help();
  } else if (command == 'help') {
    help();
  } else if (command.startsWith('add-student')) {
    let name = command.substring(11).trim();
    student = new Student(name);
    students.push(student);
  } else if (command.startsWith('select-student')) {
    let name = command.substring(14).trim();
    student = students.find((s) => s.name == name);
    if (student) {
      console.log('Student %s is selected', name);
    } else {
      console.log('Student %s not found', name);
    }
  } else if (command.startsWith('add-grade')) {
    let arg = command.substring(9).trim();
    let args = arg.split(' ');
    if (student) {
      student.addGrade(args[0], args[1]);
    } else {
      console.log('No student is selected');
    }
  } else if (command == 'end' || command == 'quit') {
    break;
  }
}

rl.close();

students.forEach(s => {
  s.totals();
});