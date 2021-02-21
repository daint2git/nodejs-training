const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 10000; i += 1) {
    sum += i;
  }
  return sum;
};

process.on('message', () => {
  const sum = longComputation();
  process.send(sum);
});
