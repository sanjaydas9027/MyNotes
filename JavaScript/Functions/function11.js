/**
 * Promise.any() takes an array of promises and returns a single promise that fulfills as soon as any of the promises in the array fulfills. If all the promises are rejected, Promise.any() will reject with an AggregateError containing all the rejection reasons.

 */

// Function that returns a promise resolved after a given time
const resolvePromise = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

// Function that returns a promise rejected after a given time
const rejectPromise = (message, delay) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(message);
    }, delay);
  });
};

// Create an array of promises with different settle times
const promises = [
  resolvePromise("Resolved first", 1000), // resolves after 1 second
  rejectPromise("Rejected second", 500), // rejects after 0.5 seconds
  resolvePromise("Resolved third", 2000), // resolves after 2 seconds
  rejectPromise("Rejected fourth", 1500), // rejects after 1.5 seconds
];

// Using Promise.any() to get the first fulfilled promise
Promise.any(promises)
  .then((result) => {
    console.log("First fulfilled promise: ", result);
  })
  .catch((error) => {
    console.log("All promises were rejected: ", error);
  });
