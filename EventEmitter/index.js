const events = require('events');

// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

// Bind the connection event with the handler
const listenter1 = () => {
  console.log('connection1 succesful.');
};
eventEmitter.addListener('connection', listenter1);

// Bind the connection event with the handler
const listenter2 = () => {
  console.log('connection2 succesful.');

  // Fire the data_received event
  eventEmitter.emit('data_received');
  // Fire the xxx event
  eventEmitter.emit('xxx');
};
eventEmitter.on('connection', listenter2);

// Bind the data_received event with the handler
eventEmitter.on('data_received', () => {
  console.log('data received succesfully.');
});

// Bind the xxx event with the handler
eventEmitter.on('xxx', () => {
  console.log('xxx succesful.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log('--------');

const beforeCount = events.EventEmitter.listenerCount(
  eventEmitter,
  'connection',
);
console.log(beforeCount);
eventEmitter.removeListener('connection', listenter1);
const afterCount = events.EventEmitter.listenerCount(
  eventEmitter,
  'connection',
);
console.log(afterCount);

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function

console.log('--------');
const fs = require('fs');

fs.readFile('./text.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data.toString());
});

console.log('Program Ended.');
