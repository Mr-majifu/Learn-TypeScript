"use strict";
class Dog {
    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name, age) {
        // 在实例方法中，this 表示当前对象的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过 this 向新建对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name + "汪汪汪");
    }
}
const dog = new Dog('小黑', 2);
const dog02 = new Dog('小白', 3);
console.log(dog);
console.log(dog02);
dog.bark();
dog02.bark();
