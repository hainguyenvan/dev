/**
 * Xóa các phần tử của mảng thỏa mãn điều kiện, mảng được duyệt từ phần tử cuối cùng.
 */

const _ = require('lodash');
let arr = [1, 2, 7, 6];
console.log(_.dropRightWhile(arr, function(item) {
    return item > 5;
})); // [ 1, 2 ]