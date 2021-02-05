const path = require('path');

// console.log(path.isAbsolute('/Users/nguyen.tran.dai'));
// console.log(path.dirname('/Users/nguyen.tran.dai'));
// console.log(path.basename('/Users/nguyen.tran.dai'));
// console.log(path.extname('/Users/nguyen.tran.dai'));
// console.log(path.parse('/Users/nguyen.tran.dai'));
// console.log(
//   path.format({
//     root: '/',
//     dir: '/Users',
//     base: 'nguyen.tran.dai',
//     ext: '.dai',
//     name: 'nguyen.tran',
//   }),
// );

// Normalization
console.log(
  `normalization : ${path.normalize(
    '/sssit/javatpoint//node/newfolder/tab/..',
  )}`,
);

console.log(
  `normalization : ${path.normalize(
    '/sssit/javatpoint//node/newfolder/../tab',
  )}`,
);

// Join
console.log(
  `joint path : ${path.join(
    '/sssit',
    'javatpoint',
    'node/newfolder',
    'tab',
    '..',
  )}`,
);
// Resolve
console.log(`resolve : ${path.resolve('path_example.js')}`);
// Extension
console.log(`ext name: ${path.extname('path_example.js')}`);
