"use strict";
// 最外面这个大括号是为了不让 vscode 报错：无法重新声明块范围变量“a”。,,,,实际上不能这么写，不然编译成 js 也会有括号的
{
    // object 表示一个 js 对象
    let a;
    a = {};
    a = function () { }; // 在 js 当中， 函数也是对象
    // {} 用来制定对象中可以包含哪些属性
    // 语法： {属性名:属性值，属性名:属性值，属性名:属性值}
    let b;
    b = { name: 'chenzihao', age: 22, isMan: true };
    // b = {name:'zhouzixin'} // 报错
    // b = {name:'chenzihao',age:22,isMan:true,aaa:'bbb'} //报错
    // 在属性名后边加上？，表示属性是可选的
    let c;
    c = { name: 'chenzihao' };
    // [propName: string]: any 表示任意类型的属性
    let d;
    d = { name: 'chenzihao', age: 22 };
    // 设置函数结构的类型声明：
    // 语法：（形参:类型，形参:类型...） => 返回值
    let e;
    e = function (n1, n2) {
        return n1 + n2;
    };
    // 数组类型的声明：
    // 类型[]
    // 或者是： Array<类型>
    let f;
    f = [1, 2, 3];
    // f = ['chenzihao','zhouzixin'] // 报错
    let g;
    // 枚举
    let Gender;
    (function (Gender) {
        Gender[Gender["male"] = 0] = "male";
        Gender[Gender["female"] = 1] = "female";
    })(Gender || (Gender = {}));
    let h;
    h = { name: 'chenzihao', gender: Gender.male };
    console.log(h.gender === Gender.male);
    // &   必须要同时满足
    let i; // 感觉多此一举....
    i = { name: 'chenzihao', age: 22 };
    let j;
    j = 1;
    j = 2;
}
