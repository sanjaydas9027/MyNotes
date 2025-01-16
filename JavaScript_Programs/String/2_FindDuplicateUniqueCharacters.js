/**
 * Function to find unique and duplicate characters in a string.
 * @param {string} inputString - The string to analyze.
 * @returns {[Set, Set]} - A tuple containing a Set of unique characters and a Set of duplicate characters.
 */

function findDuplicatesAndUniques(inputString) {
  let charSet = new Set(); // Stores all characters encountered for the first time
  let duplicates = new Set(); // Stores characters that appear more than once

  for (let char of inputString) {
      // Check if the character is already in charSet
      if (!charSet.has(char)) {
          charSet.add(char); // If not present, add it to charSet
      } else {
          duplicates.add(char); // If present, add it to duplicates
      }
  }

  // Return both sets: one with all unique characters, the other with duplicates
  return [charSet, duplicates];
}

// Example usage:
let response = findDuplicatesAndUniques("programming");

// Display results:
// Spread operator converts Set to an array for a human-readable format
console.log(response)
console.log("Unique Characters:", [...response[0]]); 
console.log("Duplicate Characters:", [...response[1]]);

/**
* Notes for better understanding:
* 
* - The `Set` object:
*   - A `Set` stores unique values. Adding a value that already exists has no effect.
*   - In this code, `charSet` is used to track all characters encountered for the first time.
*   - `duplicates` is used to store characters that appear more than once.
* 
* - Why `charSet.has(char)` is used:
*   - `Set.prototype.add()` always returns the Set itself, not a boolean.
*   - To check if a character is already in the Set, we use `Set.prototype.has()`.
* 
* - Spread operator (`...`):
*   - Converts a `Set` into an array, making it easier to display and manipulate.
*   - Example:
*     - `[...charSet]` converts a Set of characters into an array of characters.
*     - Without the spread operator, printing `charSet` directly displays a `Set` object, which is less readable.
* 
* Example Outputs for "programming":
* - Unique Characters: [ 'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n' ]
* - Duplicate Characters: [ 'r', 'm', 'g' ]
*/
