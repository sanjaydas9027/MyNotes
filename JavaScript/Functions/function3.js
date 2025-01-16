// Blocking API - sync
const fs = require('fs');
const dataSync = fs.readFileSync('data.txt', 'utf8'); // Assuming data.txt is in the same directory as this script
console.log(dataSync);
console.log('File fetched');

// Non-blocking API - async
const fs1 = require('fs');
fs1.readFile('data.txt', 'utf8', (err, dataAsync) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(dataAsync);

});
console.log('File fetched');
