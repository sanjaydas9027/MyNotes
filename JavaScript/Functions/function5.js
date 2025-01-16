// #19 - Synchronous vs ASynchronous Behaviour in JavaScript 
// sync behavious

console.log('Start');
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log('End');

// Async behaviour:

console.log('Async behaviour Start');
setTimeout(() => {
    console.log('timeout is done');
}, 2000);

console.log('Async behaviour END');



