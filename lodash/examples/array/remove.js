const _ = require('lodash');

var arr = [1, 2, 3, 4];
var evens = _.remove(arr, function(item) {
    return item % 2 === 0;
});

console.log('arr: ', arr);
console.log('evens: ', evens);