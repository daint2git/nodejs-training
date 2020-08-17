const fs = require('fs');

let input = '';

// Create a readable stream
const readerStream = fs.createReadStream('./input.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('utf-8');

// Handle stream events --> data, end, and error
readerStream.on('data', chunk => {
  console.info('data');
  console.info('chunk:');
  console.info(chunk);
  input += chunk;
});

readerStream.on('end', () => {
  console.info('end');
  console.log(input);
});

readerStream.on('error', err => {
  console.error(err);
});

console.log('--------');

const writerStream = fs.createWriteStream('./output.txt');
const output = 'Simply Easy Learning';

// Write the data to stream with encoding to be utf8
writerStream.write(output, 'utf-8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', () => {
  console.info('finish');
});

writerStream.on('error', err => {
  console.error(err);
});

console.log('--------');
/**
 * Piping the Streams
 */

// Create a readable stream
const readerStream2 = fs.createReadStream('./input2.txt');

// Create a writable stream
const writerStream2 = fs.createWriteStream('./output2.txt');

// Pipe the read and write operations
// read input2.txt and write data to output2.txt
readerStream2.pipe(writerStream2);

console.log('--------');
/**
 * Chaining the Streams
 */
const zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
const compress = (inputFilePath, outputFilePath) =>
  new Promise((resolve, reject) => {
    console.log('writting gz...');
    const writtenGz = fs
      .createReadStream(inputFilePath)
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream(outputFilePath));

    writtenGz.on('finish', resolve);
    writtenGz.on('error', reject);
  });

// Decompress the file input.txt.gz to input3.txt
const decompress = (inputFilePath, outFileName) =>
  new Promise((resolve, reject) => {
    console.log('writting txt...');
    const writtenTxt = fs
      .createReadStream(inputFilePath)
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream(outFileName));

    writtenTxt.on('finish', resolve);
    writtenTxt.on('error', reject);
  });

const chaining = async () => {
  await compress('./input.txt', './input.txt.gz');
  await decompress('./input.txt.gz', './input3.txt');
};

chaining();
