"use strict";
(function () {
    // // 定义一个表示人的类
    // class Person {
    //   name: string
    //   age: number
    //   constructor(name:string,age:number){
    //     this.name = name
    //     this.age = age
    //   }
    // }
    // const per = new Person('chenzihao',22)
    // // 现在属性是在对象中设置的，属性可以任意地被修改
    // // 属性可以任意被修改会导致对象中的数据变得非常不安全
    // per.name = 'zhouzixin'
    // per.age = 20
    // console.log(per);
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // // getter 方法，用来读取属性
        // // setter 方法，用来设置属性
        // // 他们被称为属性的存取器
        // // 定义方法，用来获取 age 属性
        // getAge(){
        //   return this._age
        // }
        // // 定义方法，用来设置 age 属性
        // setAge(value:number){
        //   if(value >= 0 ){
        //     this._age = value
        //   }
        // }
        // TS 中设置 getter 方法的方式
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const per = new Person('chenzihao', 22);
    per._name = 'zhouzixin'; // public 属性，可以访问
    // per._age = 20 // 私有属性，访问不到
    // console.log(per.getAge());
    // per.setAge(30)
    console.log(per.age);
    per.age = 33;
    console.log(per);
    // -------------------------------------------------------
    class A {
        constructor(name) {
            this.name = name;
        }
    }
    class B extends A {
        test() {
            console.log(this.name);
        }
    }
    const a = new A('chenzihao');
    // a.name // 不得行
    // ----------------------------------------------
    class C {
        // 简化写法
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
})();
