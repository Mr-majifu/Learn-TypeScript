"use strict";
// 希望下面这个函数返回的类型是具体的，而不是any，显然他做不到，这时候需要使用泛型。
function firstElement(arr) {
    return arr[0];
}
let res = firstElement([1, 2, 3]); // any 类型
// 泛型
function firstElement2(arr) {
    return arr[0];
}
let res2 = firstElement2([2, 3, 4]); // number 类型
let res3 = firstElement2([]);
// 推断
function map(arr, fn) {
    return arr.map(fn);
}
let res4 = map(['1', '2', '3'], (arg) => { return parseInt(arg); });
console.log(res4);
