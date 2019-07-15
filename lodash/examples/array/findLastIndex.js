/**
 * Trả về index 
 */

const _ = require('lodash');

let arr = [1, 2, 3, 4, 4];
console.log(_.findLastIndex(arr, function(item) {
    return item === 4;
}));