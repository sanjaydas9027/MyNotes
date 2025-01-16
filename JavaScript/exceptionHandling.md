# JavaScript Exception Handling

Exception handling in JavaScript is essential for managing errors gracefully and ensuring that the program can continue running or exit in a controlled way. JavaScript provides a set of keywords and methods to handle runtime errors effectively.

---

## List of Key Exception Handling Concepts

1. **`try...catch` Statement**
2. **`finally` Block**
3. **`throw` Statement**
4. **Error Types in JavaScript**
5. **Custom Error Creation**
6. **Error Propagation**
7. **Error Handling Best Practices**

---

## Detailed Concepts and Examples

### 1. `try...catch` Statement

The `try...catch` statement is used to handle exceptions. Code that may throw an error is wrapped inside the `try` block. If an error occurs, the control passes to the `catch` block.

```javascript
try {
  let result = 10 / 0;
  console.log(result); // Runs normally
  let data = JSON.parse('{"name": "Alice"'); // This will throw an error
} catch (error) {
  console.log("Error occurred:", error.message); // Output: Error occurred: Unexpected end of JSON input
}
```

### 2. `finally` Block

The `finally` block executes after the `try` and `catch` blocks, regardless of whether an error occurred. It’s often used for cleanup tasks.

```javascript
try {
  let data = JSON.parse('{"name": "Alice"}');
  console.log(data);
} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("Execution completed."); // Always runs
}
```

### 3. `throw` Statement

The `throw` statement lets you create and throw a custom error. It can be any data type, but typically an instance of `Error` or its subclasses is used.

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Caught error:", error.message); // Output: Caught error: Cannot divide by zero
}
```

### 4. Error Types in JavaScript

JavaScript has built-in error types to handle specific error scenarios:

- **`Error`**: The base error type.
- **`TypeError`**: Thrown when a value is not of the expected type.
- **`ReferenceError`**: Thrown when a reference to a variable is invalid.
- **`SyntaxError`**: Thrown when there’s a syntax issue in the code.
- **`RangeError`**: Thrown when a number is outside its valid range.
- **`URIError`**: Thrown when there’s an error in URI handling.

#### Example of Different Error Types

```javascript
try {
  console.log(undefinedVariable); // ReferenceError
} catch (error) {
  console.log("ReferenceError:", error.message);
}

try {
  JSON.parse("{ name: 'Alice' }"); // SyntaxError
} catch (error) {
  console.log("SyntaxError:", error.message);
}
```

### 5. Custom Error Creation

You can create custom errors by extending the built-in `Error` class. This is helpful for creating meaningful error messages in larger applications.

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("Something went wrong!");
} catch (error) {
  console.log(`${error.name}: ${error.message}`); // Output: CustomError: Something went wrong!
}
```

### 6. Error Propagation

Errors can propagate up through multiple layers of function calls. If not caught in one layer, they will bubble up to the next higher scope.

```javascript
function levelOne() {
  levelTwo();
}

function levelTwo() {
  levelThree();
}

function levelThree() {
  throw new Error("An error occurred in levelThree");
}

try {
  levelOne();
} catch (error) {
  console.log("Caught error:", error.message); // Output: Caught error: An error occurred in levelThree
}
```

### 7. Error Handling Best Practices

1. **Catch Specific Errors**: Catch specific errors when possible, so you don’t mask other errors.
2. **Provide Meaningful Error Messages**: Include useful information in error messages for easier debugging.
3. **Use `finally` for Cleanup**: Use `finally` to close connections, clear resources, or perform cleanup.
4. **Avoid Silent Failures**: Avoid empty `catch` blocks that ignore errors.
5. **Throw Errors for Unexpected Scenarios**: Use `throw` for cases where normal error handling doesn’t apply.

#### Example of Best Practice

```javascript
function connectToDatabase() {
  // Hypothetical function that might fail
  if (!db.connect()) {
    throw new Error("Failed to connect to database");
  }
}

try {
  connectToDatabase();
} catch (error) {
  console.error("Database connection error:", error.message);
} finally {
  console.log("Cleanup actions, if necessary.");
}
```

---