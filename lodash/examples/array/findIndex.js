/**
 * Trả về  first index of elements
 */

const _ = require('lodash');

let arr = [1, 3, 4, 5];
console.log(_.findIndex(arr, function(item) {
    return item === 4;
}));