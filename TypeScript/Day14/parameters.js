// Optional and Default function parameters in TS
// 1. Optional Parameters
// in below function make age parameter as optional using ?
function myInfo(name, age) {
    console.log(name + " " + age);
}
myInfo("Sanjay");
//2. default parameters
function setDetails(name, msg) {
    if (msg === void 0) { msg = "welcome"; }
    return name + ":" + msg;
}
var result = setDetails("Sanjay");
console.log(result);
