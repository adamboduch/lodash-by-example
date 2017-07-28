const _ = require('lodash');

const array = [
  1, 2, 3,
  4, 5, 6,
  7, 8
];

const result = _.chunk(array, 3);

console.log(result);
// => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
