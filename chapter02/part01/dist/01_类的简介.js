"use strict";
// 使用 class 关键字来定义一个类
class Person {
    constructor() {
        // 定义属性(这个叫做实例属性)
        this.name = 'chenzihao';
        // readonly ,使属性只读，而不能做修改
        this.name02 = 'zhouzixin';
    }
    // 定义方法
    fn() {
        console.log('chenzihao fn');
    }
    // 定义静态方法
    static fn02() {
        console.log('zhouzixin fn');
    }
}
// 使用 static关键字创建类属性，也叫做静态属性，可以通过类直接访问，不需要创建实例来访问
Person.age = 22;
Person.age02 = 20;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
// per.name02 = "aaabbb" // 报错
per.fn();
Person.fn02();
