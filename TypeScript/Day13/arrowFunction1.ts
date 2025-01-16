// Arrow Functions in TypeScript

// fat arrow =>  or lambda functions

// kind of anonymous function


// let info = function () {
//     console.log('hello');
// }
// info();
// converted to arrow function

let info = () => {
    console.log('hello');
}
info();

let myPrint = () => console.log('direct print !');

myPrint();

// parameterized

let add = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(add(10, 50));

// Classs, objects

class Person {
    fName: string;
    age: number;

    constructor(fName: string, age: number) {
        this.fName = fName;
        this.age = age;
    }

    display = () => {
        console.log(this.fName + " : " + this.age);
    }
}

let p = new Person("Sanjay", 26);
p.display();






