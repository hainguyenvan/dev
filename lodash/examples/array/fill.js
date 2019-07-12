/**
 * Thay thế gía trị của phần tử trong mảng, băt đầu từ start->end
 */

const _ = require('lodash');
let arr = [1, 2, 3];
console.log(_.fill(arr, 1, 1, 2));