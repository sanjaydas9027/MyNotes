// Reverse a number
function reverseNumber(num) {
  // Method-1 : convert to string and later parse to integer
  // return parseInt(num.toString().split("").reverse().join(""));

  //Method-2
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = num / 10;
    num = Math.floor(num); // To remove decimal points
  }
  return rev;
}
let result = reverseNumber(12345);
console.log("After reversing the number: " + result);
