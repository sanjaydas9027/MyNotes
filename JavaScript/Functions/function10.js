// Using Promise.race() to see which promise settles first

// Function that returns a promise resolved after 2 seconds
const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data from function1");
    }, 2000);
  });
};

// Function that returns a promise rejected after 2 seconds
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("data from function2");
    }, 2000);
  });
};

// Promise.race() is used to execute an array of promises and return the one that settles first (resolved or rejected)
Promise.race([resolvePromise(), rejectPromise()])
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// Example array logging
let arr = [1, 2, 3, 34];
console.log(arr);
