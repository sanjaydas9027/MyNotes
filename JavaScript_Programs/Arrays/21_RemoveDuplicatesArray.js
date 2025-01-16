// Remove duplicate elements from an array

// Method: Using Set
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Remove duplicate elements using Set: ",removeDuplicates([1, 2,4, 2, 3, 4, 4, 5]));
//Remove duplicate elements using Set:  [ 1, 2, 3, 4, 5 ]

//Method: Uing filter function.
let method2 = (arr) => {
  const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return uniqueArr;
};
let result2 = method2([10, 20, 10, 30]);
console.log("Remove duplicate elements using filter(): ", result2);
// Remove duplicate elements using filter():  [ 10, 20, 30 ]

//Method: Using forEach loop.
function removeDuplicates1(arr) {
  const uniqueArr = [];
  arr.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}

let result1 = removeDuplicates1([11, 21, 21, 33, 22, 34, 22]);
console.log("Remove duplicate elements using forEach loop: ", result1);
//Remove duplicate elements using forEach loop:  [ 11, 21, 33, 22, 34 ]

//Method: Using reduce function.
let method3 = (arr) => {
  const uniqueArr = arr.reduce((acc, element) => {
    if (!acc.includes(element)) {
      acc.push(element);
    }
    return acc; // Return the updated accumulator
  }, []);
  return uniqueArr;
};

let result3 = method3([91, 92, 91, 93]);
console.log("Remove duplicate elements using reduce(): ", result3);
//Remove duplicate elements using reduce():  [ 91, 92, 93 ]


function testRemoveDup(){
  let num=[1, 2,4, 2, 3, 4, 4, 5]
  let set=new Set();
  for(let ele of num){
    set.add(ele)
  }
  console.log(set)
}
testRemoveDup()