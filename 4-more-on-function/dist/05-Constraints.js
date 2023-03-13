"use strict";
// 约束条件
// 限制泛型参数的类型，以保证只有满足某些条件的类型才能被使用。例如，我们可以定义一个泛型函数，要求泛型参数必须是具有 length 属性的参数：
function printLength(data) {
    console.log(data.length);
}
