# JavaScript Functions, Async, and Promises

JavaScript offers a rich set of tools for handling functions, asynchronous operations, and promises, which are essential for managing complex tasks and API interactions in modern applications.

---

## List of Key Topics

1. **Functions in JavaScript**
   - Function Declaration
   - Function Expressions
   - Arrow Functions
   - Higher-Order Functions
2. **Async Functions**
   - Asynchronous JavaScript
   - The `async` Keyword
   - The `await` Keyword
3. **Promises**
   - What are Promises?
   - Creating and Using Promises
   - Common Promise Methods (`then`, `catch`, `finally`)
4. **Combining Async and Promises**
   - Chaining Promises
   - Handling Errors in Promises

---

## Detailed Concepts and Examples

### 1. Functions in JavaScript

#### Function Declaration

A function declared using the `function` keyword is available throughout its scope and can be invoked before its definition due to **hoisting**.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

#### Function Expression

Functions can be defined as expressions and assigned to a variable. These functions are not hoisted.

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("Bob")); // Output: Hello, Bob!
```

#### Arrow Functions

Introduced in ES6, arrow functions are a concise syntax for writing functions. They do not have their own `this` binding, making them ideal for callbacks.

```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Carol")); // Output: Hello, Carol!
```

#### Higher-Order Functions

A higher-order function is a function that accepts another function as an argument or returns a function as a result.

```javascript
const greet = (name) => `Hello, ${name}`;
const executeGreeting = (func, name) => func(name);

console.log(executeGreeting(greet, "Dave")); // Output: Hello, Dave
```

---

### 2. Async Functions

#### Asynchronous JavaScript

Asynchronous code allows tasks to run in parallel, making JavaScript more efficient, especially in web applications. The `setTimeout` and `setInterval` functions, promises, and `async/await` all allow for asynchronous operations.

#### The `async` Keyword

The `async` keyword makes a function return a **Promise**. It allows the use of `await` within the function.

```javascript
async function fetchData() {
  return "Data fetched";
}

fetchData().then((data) => console.log(data)); // Output: Data fetched
```

#### The `await` Keyword

The `await` keyword pauses the execution of an `async` function until a Promise is resolved. It must be used within an `async` function.

```javascript
async function getData() {
  const data = await fetch("https://api.example.com/data");
  const result = await data.json();
  console.log(result);
}

getData();
```

---

### 3. Promises

#### What are Promises?

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

#### Creating and Using Promises

A Promise is created using the `new Promise` constructor, which takes a function with `resolve` and `reject` as arguments.

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise fulfilled!");
  } else {
    reject("Promise rejected.");
  }
});

promise
  .then((message) => console.log(message)) // Output if fulfilled: Promise fulfilled!
  .catch((error) => console.log(error)); // Output if rejected: Promise rejected.
```

#### Common Promise Methods

- **`.then()`**: Used to handle the resolved value of a promise.
- **`.catch()`**: Used to handle errors or rejected promises.
- **`.finally()`**: Executes code after the promise is settled, regardless of the outcome.

```javascript
promise
  .then((result) => console.log("Result:", result))
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Promise processing complete."));
```

---

### 4. Combining Async and Promises

#### Chaining Promises

Promises can be chained to perform sequential asynchronous operations, where each `.then()` receives the resolved value of the previous step.

```javascript
fetchData()
  .then((data) => process(data))
  .then((processedData) => save(processedData))
  .then(() => console.log("All operations complete"))
  .catch((error) => console.log("Error occurred:", error));
```

#### Handling Errors in Promises

Errors can be caught using `.catch()` at the end of a promise chain. In `async` functions, `try...catch` blocks can be used for error handling.

```javascript
// Promise-based error handling
fetchData()
  .then((data) => process(data))
  .catch((error) => console.log("Promise error:", error));

// Async/await error handling
async function fetchAndProcess() {
  try {
    const data = await fetchData();
    await process(data);
    console.log("Success");
  } catch (error) {
    console.log("Async error:", error);
  }
}

fetchAndProcess();
```

---
