// Find unique elements in an array
function findUniqueElements() {
  let arr = [1, 2, 2, 3, 4, 4, 5];
  let set = new Set();
  for (let ele of arr) {
    set.add(ele);
  }
  return set;
}
let result = findUniqueElements();
console.log(result); //Set(5) { 1, 2, 3, 4, 5 }
console.log([...result]); //[ 1, 2, 3, 4, 5 ]
