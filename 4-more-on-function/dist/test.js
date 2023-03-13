"use strict";
function filter2(arr, func) {
    return arr.filter(func);
}
filter2(['abc'], (x) => x === 'a');
