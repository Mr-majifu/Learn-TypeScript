"use strict";
{
    // 声明一个变量a，同时指定他的类型为 number
    let a;
    // 因为 a 的类型设置为了 number 所以使用过程中只能是 number
    a = 20;
    // a = 'holle' // 报错
    // 同理
    let b;
    b = 'holle';
    // b = 20 // 报错
    // ---------------------------------------------
    // 声明完变量的声明和赋值时同时进行的，TS 可以自动的对变量进行类型检测
    let c = false;
    let d = false;
    // ---------------------------------------------
    // ts 可以对参数的类型和个数进行限制，
    function sum(a, b) {
        return a * b;
    }
    sum(123, 456);
    console.log(sum(123, 456));
    // sum(123,'456') // 类型不对会报错
    // sum(123,456，789) // 个数不对也会报错
    // 也可以指定返回值的类型
    function sum01(a, b, c) {
        return a + b + c;
        // return a + 'holle' // 报错
    }
}
