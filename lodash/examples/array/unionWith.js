const _ = require('lodash');

var arr1 = [{ x: 1, y: 1 }, { x: 2, y: 2 }];
var arr2 = [{ x: 2, y: 2 }, { x: 3, y: 3 }];

console.log(_.unionWith(arr1, arr2, _.isEqual));