const qs = require('querystring');

console.log(qs.parse('name=dai&company=xyz'));

console.log(qs.stringify({ name: 'dai', company: 'xyz' }));
