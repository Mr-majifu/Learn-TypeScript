{
    function printName(user) {
        return 'xxx';
    }
    printName({ name1: 'asd' });
    printName({ name1: 'asd', age: 123 });
    function printName2(user) {
        // console.log(user.name1.toLocaleUpperCase()); // err
        if (user.name1 !== undefined) {
            console.log(user.name1.toLocaleUpperCase());
        }
        return 'xxx';
    }
    printName2({ age: 18 });
}
