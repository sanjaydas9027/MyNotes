// functions in TS
// named function with 0 paramets
function getInfo() {
    console.log('hello info !');
}
getInfo();
// parameterised function
function getInfo1(name, age) {
    console.log("my name is " + name + "and age is " + age);
}
getInfo1("sanjay", 26); //call by arguments
function sum(a, b) {
    return a + b;
}
var result = sum(10, 20);
console.log(result);
// Anonymous function: without name function
// call it using the variable name only.
var myPrint = function (name) {
    return name;
};
console.log(myPrint("Sanjay !"));
