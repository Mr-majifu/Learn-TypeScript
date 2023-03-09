"use strict";
function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(6));
}
const fun = (n) => n > 5;
fun.description = 'n > 5';
doSomething(fun);
