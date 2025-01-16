//1. function declaration

function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

//2. Function expression : Annonymous function
// call the function with function variable name

const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(5, 4));

//3. Arrow function expression:

const divide = (t1, t2) => t1 / t2;
let res = divide(10, 5);
console.log(res);

//4. Function constructor:
const substract = new Function("a", "b", "return a-b");
console.log(substract(5, 9));

//5. IIFE (Immediately Invoked Function Expression)
// self invoking function

(function () {
  console.log("server is running on port 3000");
})();

//6. Generator Function (function that returns iterator or sequence of objects)
// function* and yield keyword
function* generate_num() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
const res1 = generate_num();
console.log(res1.next());
console.log(res1.next());
console.log(res1.next().value);
console.log(res1.next().value);

//7. Annonymous function
// no specific name
const num11 = [1, 2, 3, 4, 5];
const squareNum = num11.map((e) => {
  return e * e;
});
console.log("map result: " + squareNum);

//8. recursive function

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log("factorial of 5 is :", factorial(5));

// Higher order function:
function addition(a, b) {
  return a + b;
}
function multiplication(a, b) {
  return a * b;
}

function operate(function_name, a, b) {
  return function_name(a, b);
}

console.log(operate(addition, 2, 5));
console.log(operate(multiplication, 2, 5));
