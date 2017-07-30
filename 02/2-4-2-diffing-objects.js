const _ = require('lodash');

const allUsers = [
  { name: 'Fred' },
  { name: 'Lisa' },
  { name: 'Alex' },
  { name: 'Brandon' },
  { name: 'Mary' }
];

const inactiveUsers = [allUsers[1], allUsers[3]];

const activeUsers = _(allUsers)
  .difference(inactiveUsers)
  .map('name')
  .join();

console.log(activeUsers);
// => Fred,Alex,Mary
