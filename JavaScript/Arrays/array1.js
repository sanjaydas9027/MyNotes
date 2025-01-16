// Declaration

const { log } = require("console");

let arr1 = []; //an empty array
let arr2 = [1, 3, 2, 'ram', 'hari', 1.87];
console.log(arr2);

// operations 
let lang = ['java', 'python'];

// 1. Push Appends new elements to the end of an array, and returns the new length of the array.
lang.push('Ruby', 'HTML'); // [ 'java', 'python', 'Ruby' , 'HTML]
console.log('post push() : ', lang);

// 2. pop Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let removedElement = lang.pop();
console.log('removed element using pop() is -', removedElement);
console.log('post pop() ->', lang);


// 3. shift() Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removedFirstElement = lang.shift();
console.log('removed first element->', removedFirstElement);
console, log('shift()->', lang)

//4. Unshift() 
//Inserts new elements at the start of an array, and returns the new length of the array.
// @param items — Elements to insert at the start of the array.

lang.unshift('JavaScript', 'TS');
console, log('post unshift->', lang);

//5. splice() Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// splice(startIndex,delete count, add element)
lang.splice(1, 2, 'java'); //emoved 2 items and added 1 item
console.log('after splice()->', lang);

// 6. slice() returns an array as per specified start and end index

let arr5 = [0, 1, 2, 3, 4, 5, 6, 7]
arr6 = arr5.slice(1, 5)
console.log('post slice->', arr6, arr5[1], arr5[5])


// 7. concat() 
let arr7 = ['apple', 'banana'];
let arr8 = [12, 23.7, 90];
let arr9 = arr7.concat(arr8)
console.log('post concat() ->', arr9)

//8. indexOf 
let colors = ['red', 'blue', 'green', 'yellow', 'red', 'black'];
console.log('indexof() -> ', colors.indexOf('black'));
console.log('indexof() -> ', colors.indexOf('red'));
console.log('indexof() -> ', colors.indexOf('red', 1));
//2nd red color index
console.log('indexof() -> ', colors.indexOf('red', colors.indexOf('red') + 1));


// 9. includes --returns true if searched item present
let test = ['admin', 'customer', 'seller', 'vendor'];
console.log('includes() ->', test.includes('seller'));
console.log('includes() ->', test.includes('seller', 'buyer')); //returns 1st item presence o/p
console.log('includes() ->', test.includes('buyer', 'seller'));

// 10. forEach

let num1 = [1, 2, 3, 4, 5, 6, 7];
num1.forEach((ele) => {
    console.log(ele);
});


// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length)
