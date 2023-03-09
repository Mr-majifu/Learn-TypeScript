"use strict";
// class Ctor{
//   s: string
//   constructor(s:string) {
//     this.s = s
//   }
// }
function fn(ctor) {
    return new ctor('Hello');
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
const f = fn(Person);
console.log(f.name);
