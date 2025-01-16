// Arrow Function
//1.
const calculate_square = num => num * num;
console.log(calculate_square(5));

//2
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 2));

//3
const msg = () => "Hello Js";
console.log(msg());

//4
const person = {
    firstName: "Sanjay",
    lastName: "Das"
}

const fullName = person => `${person.firstName} ${person.lastName}`;
console.log(fullName(person));

//5 rest parametrs...varargs
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5));

//
//here browser='chrome' is default value ,
const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`browser: ${browser}`);
    console.log('other details');
    console.log(`browser: ${browser} ${details} `);
}
console.log(browserInfo());
console.log(browserInfo('firefox', '1.55', 'developed by mozila'));

//max number using Math lib
const maxValue = (a, b, c) => {
    return Math.max(a, b, c);
};
console.log(maxValue(3, 90, 9));

