const _ = require('lodash');
var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

const data = _.takeWhile(users, function(o) { return !o.active; });
console.log(data);