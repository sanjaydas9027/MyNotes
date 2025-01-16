// 3. reduce() 

let num3 = [1,2,3,4,5,6,7];
// reduce((accumulator,element of array)=> expression,initial value of accumulator)
let result = num3.reduce((sum, ele) => sum + ele, 10);
console.log('result for reduce() ->', result);

console.log('array length : '+num3.length)
console.log(num3.slice(2,3))

let str='abcdefg'
console.log(str.charAt(0))
console.log(str.charAt(1))
console.log(str.length)
console.log(str.slice(2,4))
console.log(str.includes('e'))
console.log(str.search('e'))