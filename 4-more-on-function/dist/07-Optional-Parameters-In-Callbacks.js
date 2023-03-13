"use strict";
// 回调的可选参数
// 为回调编写函数类型时，切勿编写可选​​参数，除非您打算在不传递该参数的情况下调用该函数
// bad .e.g
function myForEach(arr, callback) {
    for (let i = 0; i <= arr.length; i++) {
        callback(arr[i]);
    }
}
// myForEach([1,2,3], (a,i) => console.log(i.toFixed()))
myForEach([1, 2, 3], (a, i) => console.log(i === null || i === void 0 ? void 0 : i.toFixed()));
