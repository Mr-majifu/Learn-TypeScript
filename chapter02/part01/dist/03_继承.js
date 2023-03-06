"use strict";
(function () {
    // 定义一个 Animal 类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    // 定义一个 Dog 类
    // 使得 Dog 类继承 Animal 类
    /**
     *  Dog extends Animal
     *  - 此时，Animal 被称为父类，Dog 被称为子类
     *  - 使用继承后，子类将会拥有父类所有的方法和属性
     *  - 通过继承可以将多个类中共有的代码写在一个父类中，
     *      这样只需要写一次即可让所有的子类都同时拥有父类中的属性
     *      如果希望在子类中添加一些父类中没有的属性或方法，直接添加就行
     *  - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法，称为方法重写
     */
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
        sayHello() {
            console.log("汪汪汪");
        }
    }
    // 定义一个 Cat 类
    class Cat extends Animal {
    }
    const dog = new Dog('小黑', 3);
    const cat = new Cat('喜士多', 2);
    console.log(dog);
    console.log(cat);
    dog.sayHello();
    cat.sayHello();
    dog.run();
})();
