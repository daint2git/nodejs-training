const fs = require('fs');

const serialize = data => JSON.stringify(data, null, 2);
const deserialize = rawdata => JSON.parse(rawdata);

// readFileSync
const rawdata = fs.readFileSync('./student.json');
const student = deserialize(rawdata);
console.log(student);

// import json file
const jsonData = require('./student.json');

console.log(jsonData);

// writeFileSync
// const newStudent = {
//   name: 'DaiNT2 xxx',
//   age: 27,
//   gender: 'Male',
//   department: 'History xxx',
//   car: 'Yamaha xxx',
// };
// const data = serialize(newStudent);
// fs.writeFileSync('./student-2.json', data);

// const students = [student, newStudent];
// fs.writeFileSync('./db.json', serialize({ students }));

console.log('--------');

function getSudents() {
  const rawDB = fs.readFileSync('./db.json');
  return deserialize(rawDB).students;
}

function addSudent(newData) {
  const students = getSudents();
  students.push(newData);
  fs.writeFileSync('./db.json', serialize({ students }));
}

console.log('students', getSudents());
const newStudent = {
  name: 'DaiNT2 xxx',
  age: 27,
  gender: 'Male',
  department: 'History xxx',
  car: 'Yamaha xxx',
};
addSudent(newStudent);
console.log('new students', getSudents());
