// Print character count in a string
function characterCount(str) {
  const counts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  console.log(counts); //{ a: 2, b: 2, c: 3 }
  console.log(Object.entries(counts)); //[ [ 'a', 2 ], [ 'b', 2 ], [ 'c', 3 ] ]
  console.log(Object.entries(counts).join("")); //a,2b,2c,3
  console.log(Object.entries(counts).join("").replaceAll(",", "")); //a2b2c3
  console.log(Object.entries(counts).map(([char, count]) => `${char}${count}`)); //[ 'a2', 'b2', 'c3' ]
  return Object.entries(counts)
    .map(([char, count]) => `${char}${count}`)
    .join("");
}
let result = characterCount("abbccca");
console.log("Character count in string: " + result);
