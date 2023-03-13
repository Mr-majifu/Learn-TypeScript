"use strict";
function getName() {
    return this.name;
}
const person = { name: "Alice" };
console.log(getName.call(person));
