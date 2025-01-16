// 1. every()Determines whether all the members of an array satisfy the specified test.
// return type is true/false 
let arr = [1, 2, 3, 4, 5];
let flag1 = arr.every((ele) => ele < 40);
console.log('every() -> ', flag1);

//2.some()  check atleaast one element of array passes condition

let arr2 = [1, 20, 3, 5, 9];
let flag2 = arr.some((e) => e % 2 == 0);
console.log('some() ->', flag2);

//3. find()  returns the first element that satisfies a given condition

let arr3 = [1, 2, 3, 4, 5, 6];
let result3 = arr3.find((e) => e % 2 == 0);
console.log(result3);


// 4.indexOf
// returns -1 if not found
let arr4 = ['apple', 'banana', 'orange'];
let res1 = arr4.indexOf('guava');
console.log('index of not matched item:', res1);
let res2 = arr4.indexOf('orange');
console.log('index of matched item: ', res2);

// 5.lastIndexOf
let fruit = ['apple', 'banana', 'apple', 'coconut'];
let res4 = fruit.lastIndexOf('apple');
console.log('lastIndexOf', res4);

// 6. reverse 
let arr5 = [1, 3, 4, 5,9,2];
let arr6 = arr5.reverse();
console.log('reverse()->', arr6);


// 7.sort()

console.log('post sort()->', arr6.sort());


