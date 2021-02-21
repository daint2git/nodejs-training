const EventEmitter = require('events');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class WithTime extends EventEmitter {
  async execute(asyncFunc, ...args) {
    this.emit('begin');
    try {
      console.time('execute');
      const data = await asyncFunc(...args);
      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    } catch (err) {
      this.emit('error', err);
    }
  }
}

const withTime = new WithTime();

withTime.on('data', data => {
  console.log(`Length: ${data.length}`);
});

withTime.on('data', data => {
  console.log(`Characters: ${data.toString().length}`);
});

withTime.execute(readFile, __filename);
