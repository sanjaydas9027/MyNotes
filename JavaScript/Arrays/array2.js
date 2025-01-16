// Map() Filter() reduce()

// 1. map()Calls a defined callback function on each element of an array, and returns an array that contains the results.
// map() always return a new array 
let num = [1, 2, 3];
let num1 = num.map((ele) => ele * 2)
console.log('before map() used : ', num)
console.log('post map() multiply by 2 : ', num1)

// exaple- convert Farenhite to Celcius 
//  (F-32)*(5/9)

let farTemp = [32, 67, 42];
// function fahToCel(fah){
//     return (fah-32)*5/9;
// }
// use map 
let celTemp = farTemp.map((fah) => ((fah - 32) * 5 / 9));
console.log(farTemp, celTemp);


// 2. filter() Returns the elements of an array that meet the condition specified in a callback function.

let num2 = [1, 2, 3, 4, 5, 6, 7];
let evenNum = num2.filter((e1) => e1 % 2 === 0);
console.log('even numbers are', evenNum)


let employee = [
    { name: "John", age: 20, gender: "male" },
    { name: "Raj", age: 21, gender: "male" },
    { name: "Hook", age: 23, gender: "male" },
]
console.log(employee);

let reqEmployee = employee.filter((ele) => {
    return ele.age > 20 && ele.gender === 'male';
});
console.log('list employee age>20 and gender=male', reqEmployee);



// 3. reduce() 

let num3 = [10, 20, 30, 40, 5];
// reduce((accumulator,element of array)=> expression,initial value of accumulator)
let result = num3.reduce((sum, ele) => sum + ele, 0);
console.log('result for reduce() ->', result);


//  cart
let cartItem = [
    { item: 'Jeans', price: 500 },
    { item: 'Shirt', price: 400 },
    { item: 'Mobile', price: 22500 },
    { item: 'Bag', price: 300 },
    { item: 'Shoe', price: 800 }
]

let cartPrice = cartItem.reduce((totalAmount, ele) =>
    totalAmount + ele.price, 0
);
console.log("cart price is :", cartPrice);