process.on('message', msg => {
  console.log('Message from parent:', msg);
});

let counter = 0;

const timer = setInterval(() => {
  process.send({ counter });
  counter += 1;
  if (counter === 10) {
    clearInterval(timer);
    process.exit();
  }
}, 100);
