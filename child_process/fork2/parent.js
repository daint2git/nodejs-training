const { fork } = require('child_process');

const compute = fork('child.js');

compute.on('message', sum => {
  console.log('sum from parent:', sum);
  compute.kill();
});

compute.send('start');
