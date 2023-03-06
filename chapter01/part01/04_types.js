// 最外面这个大括号是为了不让 vscode 报错：无法重新声明块范围变量“a”。,,,,实际上不能这么写，不然编译成 js 也会有括号的
{
    // object 表示一个 js 对象
    var a = void 0;
    a = {};
    a = function () { }; // 在 js 当中， 函数也是对象
    // {} 用来制定对象中可以包含哪些属性
    // 语法： {属性名:属性值，属性名:属性值，属性名:属性值}
    var b = void 0;
    b = { name: 'chenzihao', age: 22, isMan: true };
    // b = {name:'zhouzixin'} // 报错
    // b = {name:'chenzihao',age:22,isMan:true,aaa:'bbb'} //报错
    // 在属性名后边加上？，表示属性是可选的
    var c = void 0;
    c = { name: 'chenzihao' };
    // [propName: string]: any 表示任意类型的属性
    var d = void 0;
    d = { name: 'chenzihao', age: 22 };
    // 设置函数结构的类型声明：
    // 语法：（形参:类型，形参:类型...） => 返回值
    var e = void 0;
    e = function (n1, n2) {
        return n1 + n2;
    };
    // 数组类型的声明：
    // 类型[]
    // 或者是： Array<类型>
    var f = void 0;
    f = [1, 2, 3];
    // f = ['chenzihao','zhouzixin'] // 报错
    var g = void 0;
    // 枚举
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["male"] = 0] = "male";
        Gender[Gender["female"] = 1] = "female";
    })(Gender || (Gender = {}));
    var h = void 0;
    h = { name: 'chenzihao', gender: Gender.male };
    console.log(h.gender === Gender.male);
}
