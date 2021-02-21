const { spawn } = require('child_process');

const child = spawn('node -v', {
  stdio: 'inherit',
  shell: true,
});

child.stdout.on('data', data => {
  console.log('stdout', data);
});
