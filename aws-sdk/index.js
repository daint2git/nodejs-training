const AWS = require('aws-sdk')

// Create an S3 client
const s3 = new AWS.S3({
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'dummy',
    secretAccessKey: 'dummy',
  },
  endpoint: 'http://localhost:4572',
  s3ForcePathStyle: true,
})

s3.getObject(
  {
    Bucket: 'awsbucket',
    Key: 'sdsds.png',
  },
  (err, data) => {
    console.log('err', err)
    console.log('data', data)
  },
)

// async function uploadFile(data, filename) {
//   return new Promise((resolve) => {
//     s3.upload(
//       {
//         Bucket: 'awsbucket',
//         Key: filename,
//         Body: data,
//       },
//       (err, res) => {
//         if (err) throw err;
//         resolve(res);
//       },
//     );
//   });
// }

// uploadFile('Helllo', 'test.txt').then((res) => {
//   console.log('success', res);
// });
