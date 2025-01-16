// for loop
console.log("---- for loop ----");
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// for..of loop
console.log("---- for..of loop----");
var numbers = [10, 200, 300, 400];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n_1 = numbers_1[_i];
    console.log(n_1);
}
var info = "hello";
for (var _a = 0, info_1 = info; _a < info_1.length; _a++) {
    var k = info_1[_a];
    console.log(k);
}
// for..in loop
console.log("----for..in loop----");
// it will give the index insted of values
var numbers1 = [10, 200, 300, 400];
for (var n_2 in numbers1) {
    console.log(n_2);
}
//while loop
console.log("---- while loop----");
var key = 1;
var count = 0;
while (key < 5) {
    count = count + key;
    key++;
}
console.log("while loop - count is " + count);
// usecase of while loop
// do while loop
console.log("---- do while loop----");
var n = 0;
do {
    console.log(n);
    n++;
} while (n < 5);
