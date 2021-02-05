const os = require('os');

// Endianness
console.log(`endianness : ${os.endianness()}`);

// OS type
console.log(`type : ${os.type()}`);

// OS platform
console.log(`platform : ${os.platform()}`);

// Total system memory
console.log(`total memory : ${os.totalmem()} bytes.`);

// Total free memory
console.log(`free memory : ${os.freemem()} bytes.`);

// CPUs
console.log('os.cpus(): \n', os.cpus());

console.log('os.arch(): \n', os.arch());
console.log('os.networkInterfaces(): \n', os.networkInterfaces());

console.log('os.homedir(): \n', os.homedir());
console.log('os.hostname(): \n', os.hostname());
console.log('os.loadavg(): \n', os.loadavg());
console.log('os.release(): \n', os.release());
console.log('os.tmpdir(): \n', os.tmpdir());
console.log('os.uptime(): \n', os.uptime());
