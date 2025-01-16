function getEvenNumber(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 == 0) {
        resolve(value);
      } else {
        reject(new Error("value is not even ..!"));
      }
    }, delay);
  });
}

// promise chain

getEvenNumber(4, 1000)
  .then((result) => {
    console.log("Even number", result);
    return getEvenNumber(3, 1000);
  })
  .then((result) => {
    console.log("Even number: ", result);
  })
  .catch((error) => {
    console.error("promise chain error", error);
  });
