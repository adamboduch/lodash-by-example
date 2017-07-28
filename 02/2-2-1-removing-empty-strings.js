const _ = require('lodash');

const array = ['', 'one', '', '', 'two', ''];

const withoutCompact = array.join(' ');
console.log(withoutCompact);
// =>  one   two

const withCompact = _.compact(array).join(' ');
console.log(withCompact);
// => one two
