// Find the largest number in an array
function findLargest(arr) {
  // return Math.max(...arr);
  let max = arr[0];
  let min = arr[0];
  for (let element of arr) {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  }
  return [max, min];
}
let result = findLargest([3, 5, 7, 2, 8]);
console.log("Maximun Element is : " + result[0]); //Maximun Element is :8
console.log("Minimum Element is : " + result[1]); //Minimum Element is : 2
