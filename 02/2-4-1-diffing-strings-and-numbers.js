const _ = require('lodash');

const stringDiff = _.difference(
  ['one', 'two', 'three'],
  ['one', 'four', 'two'],
  ['one', 'two', 'five']
);
console.log(stringDiff);
// => [ 'three' ]

const numberDiff = _.difference(
  [1, 2, 3],
  [1, 4, 2],
  [1, 2, 5]
);
console.log(numberDiff);
// => [ 3 ]
