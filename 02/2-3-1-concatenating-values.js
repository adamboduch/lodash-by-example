const _ = require('lodash');

const arrayAndValues = _.concat([1, 2, 3], 4, 5);
console.log(arrayAndValues);
// => [ 1, 2, 3, 4, 5 ]

const valuesOnly = _.concat(1, 2, 3);
console.log(valuesOnly);
// => [ 1, 2, 3 ]
