
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

const fun = (n: number) => n > 5

fun.description = 'n > 5'

doSomething(fun)