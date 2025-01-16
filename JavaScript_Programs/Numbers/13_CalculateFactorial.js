// Calculate factorial of a number
function factorial(num) {
  let fact = 1;
  if (num < 0) {
    return "Invalid input";
  } else {
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
}
console.log(factorial(5));
