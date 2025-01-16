// Find prime numbers up to a given limit
function findPrimes(limit) {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let res = isPrime(num);
    if (res) {
      primes.push(res);
    }
  }
  return primes;
}
console.log(findPrimes(50).join(" "));

function isPrime(number) {
  //		number > 1 && number only divisible by 1 & itself
  if (number > 1) {
    let flag = false;
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        flag = true;
        break;
      }
    }

    if (flag == false) {
      return number;
    }
  }
}
