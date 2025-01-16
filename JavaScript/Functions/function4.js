// #18 - Callback Function In JavaScript

// callback function is a function that passed as an argument to another function 

// async call/task--once this task is completed -then only callback function will be called

//1. basic callback
function greet(name, callback) {
    // normal task/sync or async call/api
    console.log('hello' + name);
    callback();
};
// callback function
function welcome() {
    console.log('welcome function');
};

greet('Sanjay', welcome);


//2. callback with async function

function printInfo(name, callback) {

    // async function
    setTimeout(function () {
        console.log('printInfo' + name);
        callback('plz callme back !!!');
    }, 1000); // delay of 1s
}

function displayMessage(msg) {
    // console.log(' Display Message function');
    console.log(msg);
}

printInfo('Lisa', displayMessage);


//

function fetchUserData(userId, callback) {
    setTimeout(function () {
        const users = {
            1: { id: 1, name: 'Sanjay' },
            2: { id: 2, name: 'Jyoti' }
        };
        let user = users[userId];
        if (user) {
            callback(null, user);
        }
        else {
            callback("User not found", null);
        }
    }, 2000); // corrected placement of setTimeout
}

// Callback function
function handleUserData(error, user) {
    if (error) {
        console.error('Error: ' + error);
    }
    else {
        // console.log('User: ', user);
        console.log('User: ', JSON.stringify(user)); // Convert user object to string
        
    }
}

fetchUserData(2, handleUserData);
fetchUserData(5, handleUserData);

