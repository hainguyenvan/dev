const _ = require('lodash');

let arr = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 2 }];
console.log(_.pullAllWith(arr, [{ x: 1, y: 2 }], _.isEqual));