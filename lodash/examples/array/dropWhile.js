/**
 * Xóa các phần tử của mảng thỏa mãn điều kiện, nó bắt đầu duyệt từ phần tử đầu tiên
 */

const _ = require('lodash');
let arr = [3, 4, 1, 4, 1];
console.log(_.dropWhile(arr, function(item) {
    return item > 2;
}));