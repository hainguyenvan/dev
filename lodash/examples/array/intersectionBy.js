const _ = require('lodash');

let arr1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
let arr2 = [{ x: 1 }, { x: 3 }];
console.log(_.intersectionBy(arr1, arr2, 'x'))