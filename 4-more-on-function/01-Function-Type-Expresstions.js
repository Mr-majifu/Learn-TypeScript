"use strict";
function greeter(fn) {
    fn("Helle TS Function");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
