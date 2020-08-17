const fs = require('fs');

console.log('Going to read directory /FileSystem');

fs.readdir('../FileSystem', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('readdir');
  files.forEach(file => {
    console.log(file);
  });
});

const files = fs.readdirSync('../FileSystem');
console.log('readdirSync');
files.forEach(file => {
  console.log(file);
});

console.log('Program Ended.');
