// promise.all()
// promise.all() is commonly used when you want to perform multiple asynchronous operations in parallel and wait for all of them to complete before moving on.
// promise.all() will handel if all promise are resolved, if any one promse is rejected then only reject message will be displeyed

const function1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data from function1");
    }, 2000);
  });
};
const function2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("data from function2");
    }, 2000);
  });
};
const function3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data from function3");
    }, 2000);
  });
};

Promise.all([function1(), function2(), function3()])
  .then((dataArray) => {
    console.log("All data from all functions", dataArray);
  })
  .catch((error) => {
    console.log("error in promise: ", error);
  });

let arr = [1, 2, 3, 34];
console.log(arr);
