"use strict";
{
    function printName(user) {
        return 'xxx';
    }
    printName({ name1: 'asd' });
    printName({ name1: 'asd', age: 123 });
    function printName2(user) {
        var _a;
        // console.log(user.name1.toLocaleUpperCase()); // err
        // if(user.name1 !== undefined) {
        //   console.log(user.name1.toLocaleUpperCase());
        // }
        console.log((_a = user.name1) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
        return 'xxx';
    }
    printName2({ age: 18 });
}
