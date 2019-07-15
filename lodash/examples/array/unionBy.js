const _ = require('lodash');

let arr1 = [{ x: 1, y: 1 }, { x: 2 }];
let arr2 = [{ x: 1 }, { x: 3 }];

console.log(_.unionBy(arr1, arr2, 'x'));