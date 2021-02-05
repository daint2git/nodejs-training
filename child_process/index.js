// const { spawn } = require('child_process');

// const ls = spawn('cat', ['testa.js']);

// console.log('start');

// ls.stdout.on('data', data => {
//   console.log('stdout', data);
// });

// ls.stderr.on('data', data => {
//   console.log('stderr', data);
// });

// ls.on('close', code => {
//   console.log(`child process exited with code ${code}`);
// });

// console.log('end');

// console.log('---');

// const { spawnSync } = require('child_process');

// const ls = spawnSync('cat', ['test.js']);

// console.log('start');

// console.log(ls.status);
// console.log(`stdout here: \n${ls.stdout}`);
// console.log(`stderr here: \n${ls.stderr}`);

// console.log('end');

// console.log('---');

// const { exec } = require('child_process');

// exec('cat test.js', (error, stdout, stderr) => {
//   console.log('stderr', stderr);
//   console.log('stdout', stdout);

//   if (error) {
//     console.error(error);
//   }
// });

// console.log('---');

// const { execSync } = require('child_process');

// const result = execSync('cat test.js');

// console.log(result.toString('utf8'));

// console.log('---');

// const { execFile } = require('child_process');

// execFile('cat', ['test.js'], (error, stdout, stderr) => {
//   console.log('stderr', stderr);
//   console.log('stdout', stdout);

//   if (error) {
//     console.error(error);
//   }
// });

// console.log('---');

const { fork } = require('child_process');

const ls = fork('./child.js');

let count = 0;

// exiting the thread when child process ended

ls.on('exit', code => {
  console.log(`child_process exited with code ${code}`);
});

ls.on('message', msg => {
  console.log(`PARENT: message from child process is ${msg}`);
  count = parseInt(msg, 10) + 1;
  console.log('PARENT: +1 from parent');
  ls.send(count);
});
