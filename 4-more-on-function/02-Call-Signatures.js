function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(6));
}
var fun = function (n) { return n > 5; };
fun.description = 'n > 5';
doSomething(fun);
