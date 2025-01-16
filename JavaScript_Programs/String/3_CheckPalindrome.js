// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Convert the input string to lowercase to make it case-insensitive
  str = str.toLowerCase();

  // Reverse the string
  let rev = "";
  for (let ch = str.length - 1; ch >= 0; ch--) {
    rev += str[ch]; // Append each character in reverse order
  }

  // Check if the original string is the same as the reversed string
  return str === rev;
}

// Test the function
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
