const zlib = require('zlib');
const fs = require('fs');

const compress = () => {
  return new Promise((resolve, reject) => {
    console.log('writting gz...');
    const gzip = zlib.createGzip();
    const input = fs.createReadStream('./input.txt');
    const output = fs.createWriteStream('./input.txt.gz');
    const stream = input.pipe(gzip).pipe(output);

    stream.on('finish', resolve);
    stream.on('error', reject);
  });
};

const decompress = () => {
  return new Promise((resolve, reject) => {
    console.log('writting txt...');
    const unzip = zlib.createGunzip();
    const input = fs.createReadStream('./input.txt.gz');
    const output = fs.createWriteStream('./input2.txt');
    const stream = input.pipe(unzip).pipe(output);

    stream.on('finish', resolve);
    stream.on('error', reject);
  });
};

(async () => {
  await compress();
  await decompress();
})();
