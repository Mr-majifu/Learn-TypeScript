(function () {


  // 以 abstract 开头的类就是抽象类
  // 抽象类和其他类区别不大，只是不能用来创建对象
  // 抽象类是专门用来继承的类

  // 抽象类中可以添加抽象方法
  // 抽象方法使用 abstarct 开头，没有方法体
  // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写

  abstract class Animal {
    name: string

    constructor(name: string) {
      this.name = name
    }

    abstract sayHello(): void
  }

  class Dog extends Animal {
    sayHello() {
      console.log('wangwangwang');

    }
  }

  class Cat extends Animal {
    sayHello() {
      console.log('miaomiaomiao');

    }
  }

  const dog = new Dog("小黑")


})()