// Find the second largest element in an array
function findSecondLargest(arr) {
  // Remove duplicate elements
  let uniqueArray = [...new Set(arr)];
//   console.log(uniqueArray); //[ 3, 5, 7, 2, 8 ]
  let uniqueSorted = uniqueArray.sort(); 
//   console.log(uniqueSorted);//[ 2, 3, 5, 7, 8 ] 

  console.log("Largest element: " + uniqueSorted[uniqueSorted.length - 1]); //Largest element: 8
  console.log("Lowest element: " + uniqueSorted[0]); //Lowest element: 2
  console.log("2nd Largest element: " + uniqueSorted[uniqueSorted.length - 2]); //2nd Largest element: 7
}
findSecondLargest([3, 5, 7, 2, 8]);
