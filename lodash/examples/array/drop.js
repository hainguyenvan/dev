/**
 * Xóa n phần tử của mảng, bắt đầu từ phần tử đầu tiên 
 */

const _ = require('lodash');
let arr = [1, 2, 3, 4];
console.log(_.drop(arr, 2)); // [ 3, 4 ]