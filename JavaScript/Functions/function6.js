// Promise -1

const randomNumberPromise = new Promise((resolve, reject) => {
  //async operation
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("Value is too small"));
    }
  }, 2000);
});

randomNumberPromise
  .then((result) => {
    console.log("Promise is fullfiled: ", result);
  })
  .catch((error) => {
    console.log("Promise is rejected: ", error);
  });
