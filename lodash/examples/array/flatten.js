const _ = require('lodash');

let arr = [1, [1, 3, [4, 5]], 4];
console.log(_.flatten(arr));