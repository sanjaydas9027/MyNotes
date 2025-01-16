// for loop
console.log("---- for loop ----");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for..of loop
console.log("---- for..of loop----");
let numbers = [10, 200, 300, 400];
for (let n of numbers) {
    console.log(n);
}

let info = "hello";
for (let k of info) {
    console.log(k);
}
// for..in loop
console.log("----for..in loop----");
// it will give the index insted of values
let numbers1 = [10, 200, 300, 400];
for (let n in numbers1) {
    console.log(n);
}

//while loop
console.log("---- while loop----");
let key = 1;
let count = 0;
while (key < 5) {
    count = count + key;
    key++;
}
console.log("while loop - count is " + count);
// usecase of while loop
// do while loop
console.log("---- do while loop----");

let n = 0;
do {
    console.log(n);
    n++;
} while (n < 5)


