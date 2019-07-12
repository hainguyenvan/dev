/**
 * Lấy ra các gía trị của arr1 mà nó không thuộc arr2 theo một key nào đó
 */

const _ = require('lodash');
let arr1 = [{ x: 1, y: 2 }, { x: 3, y: 2 }];
let arr2 = [{ x: 3, y: 2 }, { x: 2, y: 1 }];

console.log(_.differenceBy(arr1, arr2, 'x')); // [ { x: 1 } ]