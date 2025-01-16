// 1. length
let str1 = "Hello World !";
console.log(str1.length);

//2. charAt() or use []
console.log("JavaScript"[2]);
console.log("JavaScript".charAt(2));

//3. charCodeAt() returns ASCII value of character at a specific position
console.log("JavaScript".charCodeAt(2));

//4. conversion

console.log("JavaScript".toLowerCase());
console.log("JavaScript".toUpperCase());
let arr2 = [1, 2, 3];
console.log(arr2, arr2.toString());

//5. slice()
console.log("JavaScript".slice(2, 6)); //vaSc
console.log("JavaScript".slice(2, -5));//vaS

// 6. subString()
// note- both slice()and subString() method can used to get substring
console.log('JavaScript'.substring(2, 6));
//in subString all -ve values converted to 0 , so this will not behave like slice()
console.log('JavaScript'.substring(-2, 3));

// 7. concat
console.log("Sanjay".concat(" Automation"));

//8. split()
let lang = "Java_JavaScript_Python";
let res1 = lang.split('_');
console.log(res1);

//9. INCLUDES  returns true if searched element present in string
console.log("JavaScript".includes("Java"));

//10. replace()  only replace 1st matching value
//replaceAll() replace all matching values
console.log("Dev Test Framework Dev".replace("Dev", "JS"));
console.log("Dev Test Framework Dev".replaceAll("Dev", "JS"));

//11. trim()  to remove starting and trailing spaces
console.log("  JavaScript  ".trim());
console.log("  JavaScript  ".trimStart());
console.log("  JavaScript  ".trimEnd());

//12. pad() eg. upto 10th place wants to add star in string
console.log("Dev".padEnd(10, "*"));
console.log("Dev".padStart(10, "*"));

//13. startsWith & endsWith
console.log("JavaScript".startsWith("Jav"));
console.log("JavaScript".endsWith("Jav"));

//14. repeat()
console.log("dev".repeat(3));

//15. index of a specific character
console.log("Sanjay Automation Lab".indexOf("Automation"));

//16. lastIndexOf
console.log("Sanjay Automation Lab Automation".indexOf("Automation"));

//17. search() return indexof 1st matched value
console.log("Sanjay Automation Lab Automation".search("Automation"));
