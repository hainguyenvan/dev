/**
 * Nối 2 mảng lại với nhau
 */

const _ = require('lodash');

let arr = [0, 1, 2];
let arr1 = [3, 4];
console.log(_.concat(arr, arr1)); // [ 0, 1, 2, 3, 4 ]