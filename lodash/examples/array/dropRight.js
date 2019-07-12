/**
 * Xóa n phần tử cuả mảng, bắt đầu xóa từ bên phải của mảng
 */

const _ = require('lodash');
let arr = [1, 2, 3, 4];
console.log(_.dropRight(arr, 2)); // [ 1, 2 ]