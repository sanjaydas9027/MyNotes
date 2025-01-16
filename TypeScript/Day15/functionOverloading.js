// TS provides functionality of function overloading.
// You can have multiple functions.
//1. with the same name
//2. but different parameter types and return type
//3. However, the number of parameters should ne the same.
// need to implement this only once
function add(a, b) {
    return a + b;
}
var s1 = add("hero", "ku");
var s2 = add(5, 4);
console.log("s1: " + s1, "s2: " + s2);
