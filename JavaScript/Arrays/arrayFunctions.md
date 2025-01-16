### When to Use Which Method

- **Use `map()`** when you need to create a new array where each element is a transformation of the original array (e.g., modify values, apply formulas).
- **Use `filter()`** when you want to extract a subset of elements that meet specific criteria (e.g., select specific objects, find specific values).
- **Use `reduce()`** when you want to combine all elements into a single value, such as a total sum, average, or object.

---

### JavaScript Array Methods: `map()`, `filter()`, `reduce()`

#### 1. `map()`
- **Purpose**: The `map()` method creates a new array by calling a function on each element of the original array. It does **not modify the original array** and always returns a new array of the same length.
- **Use Case**: Use `map()` when you need to transform every element in an array (e.g., apply a formula, modify object properties).

```javascript
// Syntax:
array.map((element, index, array) => {
  // Your operation here
  return newElement;
});

// Example 1: Basic Transformation
let numbers = [1, 2, 3];
let incrementedNumbers = numbers.map((num) => num + 10);
console.log("Original array:", numbers); // [1, 2, 3]
console.log("Incremented by 10:", incrementedNumbers); // [11, 12, 13]

// Example 2: Convert Fahrenheit to Celsius
let fahrenheitTemps = [32, 67, 42];
let celsiusTemps = fahrenheitTemps.map((fah) => ((fah - 32) * 5) / 9);
console.log("Fahrenheit:", fahrenheitTemps); // [32, 67, 42]
console.log("Celsius:", celsiusTemps);       // [0, 19.44, 5.56]

// Example 3: Multiply elements by their index
let arr = [2, 4, 6, 8];
let indexedMultiplication = arr.map((ele, index) => ele * index);
console.log("Result after multiplying with index:", indexedMultiplication); // [0, 4, 12, 24]
```

#### 2. `filter()`
- **Purpose**: The `filter()` method returns a new array containing only the elements that satisfy the specified condition. It does **not modify the original array**.
- **Use Case**: Use `filter()` when you need a subset of the original array based on a condition (e.g., finding even numbers, filtering objects by property values).

```javascript
// Syntax:
array.filter((element, index, array) => {
  // Your condition here
  return condition;
});

// Example 1: Filter Even Numbers
let num2 = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = num2.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4, 6]

// Example 2: Filter Employees by Age and Gender
let employees = [
  { name: "John", age: 20, gender: "male" },
  { name: "Raj", age: 21, gender: "male" },
  { name: "Hook", age: 23, gender: "male" },
];

let filteredEmployees = employees.filter((emp) => emp.age > 20 && emp.gender === "male");
console.log("Filtered employees (age > 20, male):", filteredEmployees);
// Output: [{ name: "Raj", age: 21, gender: "male" }, { name: "Hook", age: 23, gender: "male" }]
```

#### 3. `reduce()`
- **Purpose**: The `reduce()` method processes each element of the array, accumulating values into a single output. You can specify an initial value for the accumulator.
- **Use Case**: Use `reduce()` when you need to combine all elements in an array to produce a single result (e.g., sum, product, or concatenation).

```javascript
// Syntax:
array.reduce((accumulator, currentValue, index, array) => {
  // Your operation here
  return accumulator;
}, initialValue);

// Example 1: Sum of Elements
let num3 = [10, 20, 30, 40, 5];
let totalSum = num3.reduce((sum, num) => sum + num, 0);
console.log("Sum of array elements:", totalSum); // 105

// Example 2: Calculate Total Price in Shopping Cart
let cartItems = [
  { item: "Jeans", price: 500 },
  { item: "Shirt", price: 400 },
  { item: "Mobile", price: 22500 },
  { item: "Bag", price: 300 },
  { item: "Shoe", price: 800 },
];

let cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
console.log("Total cart price:", cartTotal); // 24500

// Example 3: Step-by-Step Accumulation (Visualize the process)
let prices = [10, 25, 44, 50];
let totalPrice = prices.reduce((acc, curr) => {
  console.log(`Accumulator: ${acc}, Current Value: ${curr}`);
  return acc + curr;
}, 0);
console.log("Total price:", totalPrice); // 129
```

---



