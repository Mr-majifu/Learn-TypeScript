// class Ctor{
//   s: string
//   constructor(s:string) {
//     this.s = s
//   }
// }
function fn(ctor) {
    return new ctor('Hello');
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var f = fn(Person);
console.log(f.name);
