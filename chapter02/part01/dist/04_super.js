"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('wangwangwang');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            // super（）就表示调用了父类的构造函数
            super(name);
            this.age = age;
        }
        sayHello() {
            // 在类的方法中，super 表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog("小黑", 2);
    console.log(dog);
    dog.sayHello();
})();
