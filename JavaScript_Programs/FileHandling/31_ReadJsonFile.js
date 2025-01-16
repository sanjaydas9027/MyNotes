// Read JSON file data
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
console.log(data);