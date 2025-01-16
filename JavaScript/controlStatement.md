# JavaScript Control Statements, Loops, and `forEach`

JavaScript provides various control statements and loops to manage the flow of execution and handle repetition. Below is a quick overview with examples, including the `forEach` loop for arrays.

---

## Control Statements

### 1. `if`, `else if`, and `else`

Used to perform conditional operations based on expressions.

```javascript
let age = 20;

if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
// Output: Adult
```

### 2. `switch`

Evaluates an expression and executes code blocks based on matching cases. `break` prevents fall-through to the next case.

```javascript
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  default:
    console.log("No match found");
}
// Output: Apple selected
```

---

## Loops

### 1. `for` Loop

Repeats code for a specific number of iterations.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// Output: Iteration: 0, Iteration: 1, ..., Iteration: 4
```

### 2. `while` Loop

Repeats code as long as a specified condition is `true`.

```javascript
let i = 0;
while (i < 3) {
  console.log("While loop:", i);
  i++;
}
// Output: While loop: 0, While loop: 1, While loop: 2
```

### 3. `do...while` Loop

Executes code at least once and then continues as long as the condition is `true`.

```javascript
let j = 0;
do {
  console.log("Do-while loop:", j);
  j++;
} while (j < 3);
// Output: Do-while loop: 0, Do-while loop: 1, Do-while loop: 2
```

### 4. `for...of` Loop

Iterates over iterable objects (e.g., arrays, strings).

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry
```

### 5. `for...in` Loop

Iterates over properties of an object (use with objects only).

```javascript
const person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key + ":", person[key]);
}
// Output: name: Alice, age: 25
```

---

## The `forEach` Method

The `forEach` method is used to iterate over each element in an array, applying a specified function to each element. Unlike `for` loops, `forEach` does not return a new array and cannot be stopped with `break` or `continue`.

### Basic `forEach` Example

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
// Output: 1, 2, 3, 4, 5
```

### Using `forEach` with Index and Array

The `forEach` method provides three arguments to its callback: `element`, `index`, and the `array` itself.

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index, array) => {
  console.log(`${fruit} is at index ${index} in [${array}]`);
});
// Output:
// apple is at index 0 in [apple,banana,cherry]
// banana is at index 1 in [apple,banana,cherry]
// cherry is at index 2 in [apple,banana,cherry]
```

---

## Other Control Flow Keywords

### `break`

Exits the loop or `switch` statement immediately.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 0, 1, 2
```

### `continue`

Skips the current iteration and moves to the next iteration in the loop.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0, 1, 3, 4
```

---