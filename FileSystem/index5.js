const fs = require('fs');

const makeDir = dirPath =>
  new Promise((resolve, reject) => {
    fs.mkdir(dirPath, err => {
      if (err) {
        console.error(err);
        reject();
      }

      console.log('created.');
      resolve();
    });
  });

const removeDir = dirPath =>
  new Promise((resolve, reject) => {
    fs.rmdir(dirPath, err => {
      if (err) {
        console.error(err);
        reject();
      }

      console.log('removed.');
      resolve();
    });
  });

const chaining = async () => {
  await makeDir('./xxx');
  setTimeout(() => {
    removeDir('./xxx');
  }, 2000);
};

chaining();
