// Arrow Functions in TypeScript
// fat arrow =>  or lambda functions
// kind of anonymous function
// let info = function () {
//     console.log('hello');
// }
// info();
// converted to arrow function
var info = function () {
    console.log('hello');
};
info();
var myPrint = function () { return console.log('direct print !'); };
myPrint();
// parameterized
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 50));
// Classs, objects
var Person = /** @class */ (function () {
    function Person(fName, age) {
        var _this = this;
        this.display = function () {
            console.log(_this.fName + " : " + _this.age);
        };
        this.fName = fName;
        this.age = age;
    }
    return Person;
}());
var p = new Person("Sanjay", 26);
p.display();
