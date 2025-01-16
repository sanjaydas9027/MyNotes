// for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('-------------');


//for.. loop (for each loop)  
// in case of array/list use "of" to print values and in case of objects use "in" to print values

let category = ['mobile', 'tv', 'AC', 'cooler'];
for (let item of category) {
    // item='mug'
    console.log(item)
}

// for..of loop in objects

const user = {
    name: 'hari',
    age: 12,
    city: 'Delhi'
}

console.log(user)
// in case of objects use "in" to print values
for (let key in user) {
    console.log(key + " : " + user[key])
}

console.log('-------------');

// while loop

let l = 0;
while (l < 5) {
    if (l % 2 == 0) {
        console.log('even :', l)
    }
    l++;
}

console.log('-------------');

//do while loop

let k = 0;
do {
    k++
    console.log(k)

} while (k < 4)


