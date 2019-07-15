const _ = require('lodash');


var arr = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
console.log(_.pullAllBy(arr, [{ x: 1 }, { x: 3 }], 'x'));