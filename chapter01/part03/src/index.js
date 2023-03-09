"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
function sum(a, b) {
    return a + b;
}
const obj = { name: "chenzihao", age: 22 };
console.log(obj);
obj.age = 23;
console.log(obj);
console.log(sum(123, 456));
console.log("chenzihao");
console.log(module_1.name);
let fn = (a, b) => a + b;
fn(123, 456);
console.log(Promise);
