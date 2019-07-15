const _ = require('lodash');

var arr = [1, 2, [3, [5]], 6];
console.log(_.flattenDeep(arr));