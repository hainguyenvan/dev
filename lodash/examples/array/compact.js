/** 
 * remove các phần tử : false, null, 0, "", undefined, and NaN có trong array
 */

const _ = require('lodash');
let arr = [0, 1, 2, false, null];

console.log(_.compact(arr)); // [ 1, 2 ]