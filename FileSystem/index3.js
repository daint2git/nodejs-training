const fs = require('fs');

const writeFile = (filePath, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filePath, data.toString(), err => {
      if (err) {
        console.error(err);
        reject();
      }

      console.log('Data written successfully!');
      console.log("Let's read newly written data");

      resolve();
    });
  });

const readFile = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        reject();
      }

      console.log(`Asynchronous read:\n${data.toString()}`);
      resolve();
    });
  });

const chaining = async () => {
  await writeFile('./output1.txt', 'xxx\n\nyyy.');
  await readFile('./output1.txt');
};

chaining();
