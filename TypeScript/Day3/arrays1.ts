let names: string[] = ['tom', 'peeter', 'hywa'];
console.log(names[0]);


// using generics

let empNames: Array<string> = ['tom', 'peeter', 'hywa'];
let empDetails: Array<any> = ['tom', 'delhi', null];

// multi type Array
// can accept string or nuber type only 
let deptDetails: (string | number)[] = [1, 'dom'];
let deptDetails1: Array<string | number> = [1, 'dom'];

// iterate the array 
// 1. use for loop
let empNames1: Array<string> = ['tom', 'peeter', 'hywa'];
for (let i = 0; i < empNames1.length; i++) {
    console.log(empNames1[i])
}

//2. for in loop

for (let e in empNames1) {
    console.log(e)
    console.log(empNames1[e])
}


