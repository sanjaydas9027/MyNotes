// Function to check if a string is a pangram
function isPangram(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // All letters of the English alphabet
    const lowerStr = str.toLowerCase(); // Convert the input string to lowercase
    return [...alphabet].every(letter => lowerStr.includes(letter));
    /**
     * Spread Operator [...alphabet]:
     * - Converts the string "abcdefghijklmnopqrstuvwxyz" into an array of individual characters.
     * - Example:
     *   [...alphabet] produces ['a', 'b', 'c', 'd', ..., 'z']
     */
    
    /**
     * .every() Method:
     * - Checks if every letter of the alphabet exists in the input string.
     * - Syntax: array.every(callback)
     */
    
}

// Test the function with examples:
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello world!")); // false

/**
 * Notes and Examples:
 * 
 * Spread Operator [...alphabet]:
 * - Input: "abcdefghijklmnopqrstuvwxyz"
 * - Output: ['a', 'b', 'c', 'd', ..., 'z']
 * Example:
 *   const alphabet = "abcdefghijklmnopqrstuvwxyz";
 *   console.log([...alphabet]); 
 *   // Output: ['a', 'b', 'c', 'd', ..., 'z']
 * 
 * .every() Method:
 * - Checks if every element in the array satisfies a condition.
 * Example:
 *   const numbers = [1, 2, 3, 4];
 *   console.log(numbers.every(num => num > 0)); // true (all numbers are greater than 0)
 *   console.log(numbers.every(num => num > 2)); // false (not all numbers are greater than 2)
 * 
 * How It Works in the Function:
 * - `[...alphabet]` splits the string into an array of characters.
 * - `.every()` iterates over each character and checks if it exists in the input string (using `includes()`).
 * - If all letters are found, the function returns `true`; otherwise, it returns `false`.
 * 
 * Example Outputs:
 * 1. Input: "The quick brown fox jumps over the lazy dog"
 *    Output: true (Contains all letters from a to z)
 * 2. Input: "Hello world!"
 *    Output: false (Does not contain all letters from a to z)
 */
