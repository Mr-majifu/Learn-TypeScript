"use strict";
// 函数的重载
// 这是函数的实现，因为有重载，所以这个函数的实现不能直接被调用，所以传两个参数是行不通的
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
makeDate(12345678); // right
makeDate(2, 12344555, 3); // right
// 重载中并没有接收两个参数的实现
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// makeDate(2,3) // false
