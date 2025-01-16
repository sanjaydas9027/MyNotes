// Check if a number is an Armstrong number
//( 153 ): ( 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 ) (Armstrong number)

function isArmstrong(num) {
  const digits = num.toString().split("");
  console.log(digits); //Eg. [ '1', '5', '3' ]
  //+digit unary operator used to convert string digit to number type.

  const sum = digits.reduce((acc, digit) => acc + Math.pow(+digit, digits.length), 0); 
  return sum === num;

}

console.log(isArmstrong(153)); //true
console.log(isArmstrong(152)); //false