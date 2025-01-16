let str = "ramma";

// Use Set to get unique characters
let uniqueSet = new Set(str); // Creates a set with unique characters
let uniqueCharacters = [...uniqueSet]; // Converts the set to an array
console.log("Unique characters:", uniqueCharacters.join(" ")); // Output as a space-separated string

// Find duplicate characters
let duplicates = [];
let seen = new Set(); // To track characters that have already been seen

for (let char of str) {
  if (seen.has(char)) {
    duplicates.push(char);
  } else {
    seen.add(char);
  }
}

console.log("Duplicate characters:", [...new Set(duplicates)].join(" ")); // Remove duplicate entries in duplicates

console.log(seen)
