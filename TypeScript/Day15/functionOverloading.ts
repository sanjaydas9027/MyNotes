// TS provides functionality of function overloading.
// You can have multiple functions.
//1. with the same name
//2. but different parameter types and return type
//3. However, the number of parameters should ne the same.

// provide the implementation of the function
function add(a: string, b: string): string;
function add(a: number, b: number): number;


// need to implement this only once

function add(a: any, b: any) {
    return a + b;
}


let s1 = add("hero", "ku");
let s2 = add(5, 4);
console.log("s1: " + s1, "s2: " + s2);