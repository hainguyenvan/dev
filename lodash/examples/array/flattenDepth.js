const _ = require('lodash');

var arr = [1, [2, [3, [4]]], 5];
console.log(_.flattenDepth(arr, 1));