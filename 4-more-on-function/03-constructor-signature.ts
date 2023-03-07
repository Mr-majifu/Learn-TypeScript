

// class Ctor{
//   s: string
//   constructor(s:string) {
//     this.s = s
//   }
// }

// type SomeConstructor = {
//   new (s: string): Ctor
// }

// function fn(ctor: SomeConstructor) {
//   return new ctor('Hello')
// }

// const f = fn(Ctor)

// console.log(f.s);


// ----------------------------------------------

// type CallOrConstructor = {
//   (n?:number): number;
//   new (s: string): Date
// }

// function fn(date: CallOrConstructor) {
//   let date1 = date(100)
//   let date2 = new date('2023-03-06')
// }


// -----------------------------------------------

type SomeObject = any

type SomeConstructor = {
  new (s: string): SomeObject
}

function fn(ctor: SomeConstructor) {
  return new ctor('Hello')
}

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const f = fn(Person)

console.log(f.name);
