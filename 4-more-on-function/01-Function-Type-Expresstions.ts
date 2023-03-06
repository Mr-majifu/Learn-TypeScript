
type GreetFunction = (s: string) => void

function greeter(fn: GreetFunction) {
  fn("Helle TS Function")
}

function printToConsole(s:string) {
  console.log(s);
}

greeter(printToConsole)