// 1. using <>
let totalBill: any = 123;
let finalBill = <number>totalBill + 2000;
console.log(finalBill);



//2. using as keyword

let someValue: any = "hello world";
let msg = someValue as string; // stored in another variable

let valueStr: any = "ram";
(valueStr as string); // not storing in any other variable just adding type



let flag: any = true;
if (flag as boolean) {
    console.log("hello TS");

}