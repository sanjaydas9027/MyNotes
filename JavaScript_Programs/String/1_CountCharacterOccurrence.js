// Count occurrence of characters in a string

/**
 * No need to convert string to char array, in JS we can access each element like array using for loop.
 * By default the string is an char array.
 */
// Method-1
const occurrences = {};
const text = "aabbcccabcd";

for (let char of text) {
  let count = 0;
  for (let ch of text) {
    if (ch == char) {
      count++;
    }
  }
  occurrences[char] = count;
}
console.log(occurrences);

// Method-2
// empty object
let strOccuranceObj = {};
for (let element of text) {
  //strOccuranceObj[element] || 0 refers to count of character undefined/1,2,3.. or 0
  //strOccuranceObj[element] means object[ele]=5 is {ele:5}
  strOccuranceObj[element] = (strOccuranceObj[element] || 0) + 1;
}

console.log(strOccuranceObj);

