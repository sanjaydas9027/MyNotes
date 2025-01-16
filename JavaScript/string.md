# JavaScript String Methods

JavaScript offers a variety of string methods for manipulating and querying text. Here’s a handy reference.

---

## List of Methods with Short Descriptions

| Method            | Description                                                                                             |
|-------------------|---------------------------------------------------------------------------------------------------------|
| `.length`         | Returns the length of the string.                                                                       |
| `.charAt()`       | Returns the character at a specified index.                                                             |
| `.charCodeAt()`   | Returns the Unicode of the character at a specified index.                                              |
| `.toLowerCase()`  | Converts the string to lowercase.                                                                       |
| `.toUpperCase()`  | Converts the string to uppercase.                                                                       |
| `.slice()`        | Extracts a section of the string and returns it as a new string.                                        |
| `.substring()`    | Returns the part of the string between specified indices.                                               |
| `.concat()`       | Joins two or more strings and returns a new string.                                                     |
| `.split()`        | Splits the string into an array of substrings based on a specified separator.                           |
| `.includes()`     | Checks if the string contains a specified value, returning `true` or `false`.                           |
| `.replace()`      | Replaces the first match of a specified value with another.                                             |
| `.replaceAll()`   | Replaces all matches of a specified value with another.                                                 |
| `.trim()`         | Removes whitespace from both ends of the string.                                                        |
| `.trimStart()`    | Removes whitespace from the start of the string.                                                        |
| `.trimEnd()`      | Removes whitespace from the end of the string.                                                          |
| `.padStart()`     | Pads the beginning of the string with specified characters to reach a given length.                     |
| `.padEnd()`       | Pads the end of the string with specified characters to reach a given length.                           |
| `.startsWith()`   | Checks if the string starts with a specified value.                                                     |
| `.endsWith()`     | Checks if the string ends with a specified value.                                                       |
| `.repeat()`       | Repeats the string a specified number of times.                                                         |
| `.indexOf()`      | Returns the index of the first occurrence of a specified value.                                         |
| `.lastIndexOf()`  | Returns the index of the last occurrence of a specified value.                                          |
| `.search()`       | Searches for a specified value and returns the position of the match.                                   |
| `.match()`        | Finds matches of a regular expression within the string and returns an array or `null`.                 |
| `.matchAll()`     | Returns an iterator containing all matches of a regular expression in the string.                       |
| `.localeCompare()`| Compares two strings in the current locale.                                                             |
| `.normalize()`    | Returns the Unicode normalization form of a string.                                                     |

---

## Examples and Syntax for Each Method

### 1. `.length`
```javascript
let str = "Hello World!";
console.log(str.length); // Output: 12
```

### 2. `.charAt()` and Accessing Characters with `[]`
```javascript
console.log("JavaScript"[2]); // Output: v
console.log("JavaScript".charAt(2)); // Output: v
```

### 3. `.charCodeAt()`
```javascript
console.log("JavaScript".charCodeAt(2)); // Output: 118 (Unicode of "v")
```

### 4. Case Conversion (`.toLowerCase()` and `.toUpperCase()`)
```javascript
console.log("JavaScript".toLowerCase()); // Output: javascript
console.log("JavaScript".toUpperCase()); // Output: JAVASCRIPT
```

### 5. `.slice()`
```javascript
console.log("JavaScript".slice(2, 6)); // Output: vaSc
console.log("JavaScript".slice(2, -5)); // Output: vaS
```

### 6. `.substring()`
```javascript
console.log("JavaScript".substring(2, 6)); // Output: vaSc
console.log("JavaScript".substring(-2, 3)); // Output: Jav
```

### 7. `.concat()`
```javascript
console.log("Sanjay".concat(" Automation")); // Output: Sanjay Automation
```

### 8. `.split()`
```javascript
let lang = "Java_JavaScript_Python";
let res = lang.split('_');
console.log(res); // Output: ["Java", "JavaScript", "Python"]
```

### 9. `.includes()`
```javascript
console.log("JavaScript".includes("Java")); // Output: true
```

### 10. `.replace()` and `.replaceAll()`
```javascript
console.log("Dev Test Framework Dev".replace("Dev", "JS")); // Output: JS Test Framework Dev
console.log("Dev Test Framework Dev".replaceAll("Dev", "JS")); // Output: JS Test Framework JS
```

### 11. `.match()`
```javascript
let str = "JavaScript is awesome!";
let result = str.match(/a/g);
console.log(result); // Output: ["a", "a", "a"]
```

### 12. `.matchAll()`
```javascript
let str = "JavaScript is awesome!";
let regex = /a/g;
let matches = Array.from(str.matchAll(regex));
console.log(matches.map(m => m[0])); // Output: ["a", "a", "a"]
```

### 13. `.trim()`, `.trimStart()`, and `.trimEnd()`
```javascript
console.log("  JavaScript  ".trim()); // Output: JavaScript
console.log("  JavaScript  ".trimStart()); // Output: "JavaScript  "
console.log("  JavaScript  ".trimEnd()); // Output: "  JavaScript"
```

### 14. `.padStart()` and `.padEnd()`
```javascript
console.log("Dev".padEnd(10, "*")); // Output: Dev*******
console.log("Dev".padStart(10, "*")); // Output: *******Dev
```

### 15. `.startsWith()` and `.endsWith()`
```javascript
console.log("JavaScript".startsWith("Jav")); // Output: true
console.log("JavaScript".endsWith("Script")); // Output: true
```

### 16. `.repeat()`
```javascript
console.log("dev".repeat(3)); // Output: devdevdev
```

### 17. `.indexOf()`
```javascript
console.log("Sanjay Automation Lab".indexOf("Automation")); // Output: 7
```

### 18. `.lastIndexOf()`
```javascript
console.log("Sanjay Automation Lab Automation".lastIndexOf("Automation")); // Output: 20
```

### 19. `.search()`
```javascript
console.log("Sanjay Automation Lab Automation".search("Automation")); // Output: 7
```

### 20. `.normalize()`
```javascript
let str = "\u004E\u0303";
console.log(str.normalize("NFC")); // Output: Ñ
```

---

## Additional Notes

- These examples cover common usage scenarios but are not exhaustive.
- Regular expressions used in methods like `.match()` and `.replace()` offer extensive capabilities for pattern matching.
```