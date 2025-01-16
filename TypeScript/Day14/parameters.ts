// Optional and Default function parameters in TS

// 1. Optional Parameters
// in below function make age parameter as optional using ?

function myInfo(name: string, age?: number) {
    console.log(name + " " + age);
}

myInfo("Sanjay");


//2. default parameters
function setDetails(name: string, msg: string = "welcome"): string {
    return name + ":" + msg;
}

let result = setDetails("Sanjay");
console.log(result);