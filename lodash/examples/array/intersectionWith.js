const _ = require('lodash');

var arr1 = [{ x: 1, y: 2 }, { x: 2, y: 3 }];
var arr2 = [{ x: 1, y: 2 }, { x: 5, y: 5 }];
console.log(_.intersectionWith(arr1, arr2, _.isEqual));