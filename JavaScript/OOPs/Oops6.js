//1. find unique values from array
const arr = [1, 2, 3, 2, 3, 1, 4, 5, 4, 6, 7, 3];
const uniqArr = [...new Set(arr)];
console.log(uniqArr);

//2.int to string
const num = 32;
const numStr = num + '';
console.log(numStr + 10);

// or use : String(num)
//3. float to int
const floatNum = 11.78;
const intNum = parseInt(floatNum);
console.log(intNum);

//4. check if a variable is number:
const val1 = 56;
if (typeof val1 === 'number' && !isNaN(val1)) {
    console.log(val1 + '  is number');
}
else {
    console.log(val1 + '  is number');
}

//5. swap variable
let a = 5;
let b = 6;
[a, b] = [b, a];
console.log(a, b);

//6. check if an object has property
const person = {
    name: 'sanjay',
    age: 26
}

if (person.hasOwnProperty('name')) {
    console.log('person has name property')
}


//7. remove falsy values from array (false, 0, '', null values etc)
const values = [0, 1, false, 2, 3, '', null, undefined, 6, NaN]
const newVal = values.filter(Boolean);
console.log(newVal)


//8. String -> Upper, lower case
let str1 = 'Sanjay Automation lab';
str1 = str1.toUpperCase();
console.log(str1);
str1 = str1.toLowerCase();
console.log(str1);

//9. check array is empty
const empty = [];
console.log(empty.length);
if (empty.length === 0) {
    console.log('Array is empty');
}

//10. generate a random number
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNum);

//11. String to number
const str2 = '32.98';
let res1 = parseFloat(str2);
console.log(res1)

//12. Join array elements into string
const words = ['hello', 'world'];
const sentence = words.join('.. ');
console.log(sentence);

//13. get object property
const user = {
    name: 'tom',
    age: 24,
    DOB: '01-01-2000'
};
console.log(user['DOB']);

//14.clone an array or object
const marks = [10, 20, 30, 40];
const marksDuplicate = [...marks];
console.log(marksDuplicate);
const duplicateUser = { ...user };
console.log(duplicateUser);

//15. convert object to array
const employee = {
    name: 'rajesh',
    location: 'haryana'
};

//a. keys array
const keyArr = Object.keys(employee);
console.log(keyArr);

//b. values array
const valArr = Object.values(employee);
console.log(valArr);

// caches. key value format array 
const keyValArr = Object.entries(employee);
console.log(keyValArr);

//16. get current date and time

const currDate = new Date();
console.log(currDate.toLocaleString());



//17. check variable is defined:
let i;
if (typeof i === 'undefined') {
    console.log('variable is not defained');
}

// 19. Truncate an array
const testArray = [0, 1, 2, 3, 4, 5, 7, 6];
testArray.length = 3;
console.log(testArray);

// 20. Last item in array

let popArray = [0, 1, 2, 3, 4, 5];
let n1 = popArray.slice(-1);
console.log('last element in array: ' + n1);
