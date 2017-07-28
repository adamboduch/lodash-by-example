const _ = require('lodash');

const array = [1, 2, 3];

const result = _.chunk(array);

console.log(result);
// => [ [ 1 ], [ 2 ], [ 3 ] ]
