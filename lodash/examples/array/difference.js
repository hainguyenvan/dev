/**
 * Tạo ra một mảng mà nó chỉ các giá trí của arr1 không thuộc về arr2
 */

const _ = require('lodash');
let arr1 = [1, 2, 3];
let arr2 = [3];
console.log(_.difference(arr1, arr2)); // [ 1, 2 ]