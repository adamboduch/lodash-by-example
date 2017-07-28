const _ = require('lodash');

const array = new Array(5);
array[1] = 'one';
array[3] = 'three';

console.log('without compact...');
_.forEach(array, v => console.log(v));
// => undefined
// => one
// => undefined
// => three
// => undefined

console.log('with compact...');
_(array)
  .compact()
  .forEach(v => console.log(v));
  // => one
  // => three
