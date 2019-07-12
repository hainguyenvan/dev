/**
 * split array theo size
 */

const _ = require('lodash');

let arr = [1, 2, 3, 4];
console.log(_.chunk(arr, 3)); // [ [ 1, 2, 3 ], [ 4 ] ]