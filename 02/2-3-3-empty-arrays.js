const _ = require('lodash');

const firstResult = _.concat([1, 2, 3], [], []);
console.log(firstResult);
// => [ 1, 2, 3 ]

const secondResult = _.concat([1, 2, 3], new Array(3));
console.log(secondResult);
// => [ 1, 2, 3, undefined, undefined, undefined ]

const thirdResult = _.concat(
  [1, 2, 3],
  _.compact(new Array(3))
);
console.log(thirdResult);
// => [ 1, 2, 3 ]
