// JavaScript Promise

/\*
1- In JS promise are way to handle async operations
in more organized and Readable manner.
2- Promises are widely used for tasks making network requests, reading/writing files and other operations that don't block the main thread.
3- It can be in one of three states: Pending, Fulfilled or Rejected.
4- Once promise if fulfilled or rejected , it's considered setteled and it's state can't change.

Pending-- (with a Value)--> RESOLVED
Pedding -- (with a Reason)--> REJECTED

Callbacks: Promises use .then() and .catch() methods to specify callbacks for when the promise is fullfilled or rejected.
This promotes a more structured and readable code flow.

Error Handling: Promise have builtin error handling via the .catch() method,
making it easy to handle and propagate errors in asynchronous code.

Promise.all(): This method takes an array of promises and resolves when all the promises in the array have resolved. It's useful
for parallel execution of async tasks.

Promise.race(): This method takes an array of promises and resolves or rejects as soon as
one of the promises in array resolves or rejects.
It's useful for scenarios where you want to respond to the first completed task.

Async/Await: the async and await kywords simplify async code even further allowing you to write async code in a more synchronous style.

Error Propagation: Errors in promise chains automatically propagate
down to the nearest .catch() handler, making it easier to handle and manage errors.

Backward Compatibility: Promises are widely supported in modern JavaScript environments,
making them good choise for writing cross-platform asynchronous code.

Readable Code: Promises lead to more readable and maintainable asynchronous code by avoiding callback hell (also known as "callback pyramids).

Promise.then().Return: .then() returns a new promise, which allows for easy chaining of multiple asynchronous operations.

Cancelable: promises are not inherently cancelable, but there are libraries and patterns to achieve cancelation of asynchrounos operations using promises.

Microtasks : Promises resolution and rejection are handled as microtasks in the JavaScript evemnt loop, which means they have a higher priority
\*/
