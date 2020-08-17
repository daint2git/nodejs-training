const fs = require('fs');

// Asynchronous read
fs.readFile('./input.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Asynchronous read:\n${data.toString()}`);
});

// Synchronous read
const data = fs.readFileSync('./input.txt');
console.log(`Synchronous read:\n${data.toString()}`);

console.log('Program Ended');
