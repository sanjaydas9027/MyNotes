// Find duplicate elements in an array

let findDuplicateElement = () => {
  const array = [1, 2, 2, 3, 4, 4, 5, 1, 4, 4];
  let set = new Set();
  let duplicate = new Set();

  for (let ele of array) {
    if (set.has(ele)) {
      duplicate.add(ele);
    } else {
      set.add(ele);
    }
  }

  return duplicate;
};

let result = findDuplicateElement();
console.log(result); //Set(3) { 2, 4, 1 }
console.log([...result]); //[ 2, 4, 1 ]
