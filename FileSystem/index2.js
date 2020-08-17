const fs = require('fs');

fs.stat('./input.txt', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats);
  console.log('Got file info successfully!');

  // Check file type
  console.log(`isFile ? ${stats.isFile()}`);
  console.log(`isDirectory ? ${stats.isDirectory()}`);
});
