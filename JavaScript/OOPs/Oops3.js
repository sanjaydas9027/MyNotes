// Can We Overload a Function in JavaScript?
// Ans :  No we can't overload a method in Js
// in below case, the last method will be called always
function print() {
    console.log('Hi 1')

}
function print(name) {
    console.log('Hi 2 ' + name)
}
function print(name, age) {
    console.log('Hi 3 ' + name + ' ' + age)
}
print('sanjay');
print();


function displayBrowserVersion(browserName, version, remoteExecution) {
    if (typeof version === 'string' && typeof remoteExecution === 'boolean') {
        console.log(`Browser: ${browserName}, version: ${version}, remoteExecution: ${remoteExecution}`)
    }
    else {
        console.log('enter string type browser name');
    }
};

displayBrowserVersion('chrome', 1115, true);
displayBrowserVersion('chrome', '1115', true);
