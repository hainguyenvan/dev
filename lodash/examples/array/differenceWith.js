/**
 * Trả về một mảng mà nó chỉ thuộc arr1 mà không thuộc arr2, nhưng nó sẽ so sánh tất cả các key:value of object
 */

const _ = require('lodash');

let arr = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
let arr1 = [{ x: 1, y: 2 }, { x: 4, y: 5 }];

console.log(_.differenceWith(arr, arr1, _.isEqual)); // [ { x: 3, y: 4 } ]