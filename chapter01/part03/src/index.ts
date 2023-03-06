import { name } from './module'

function sum (a: number, b:number): number {
  return a + b
}

const obj = {name:"chenzihao",age:22}
console.log(obj);
obj.age = 23
console.log(obj);



console.log(sum(123,456));
console.log("chenzihao");
console.log(name);

let fn = (a:number,b:number) => a + b
fn(123,456)

console.log(Promise);


