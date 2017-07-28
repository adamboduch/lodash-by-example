const _ = require('lodash');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const concatenated = _.concat(array1, array2, array3);
console.log(concatenated);
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const flattened = _.flatten([array1, array2, array3]);
console.log(flattened);
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
