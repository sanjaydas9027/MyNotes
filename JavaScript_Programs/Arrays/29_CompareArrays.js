// Compare two arrays for equality
function compareArrays(arr1, arr2) {
  // return JSON.stringify(arr1) === JSON.stringify(arr2);
  let flag = false;
  if (arr1.length == arr2.length) {
    arr1.sort();
    arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        flag = true;
      }
    }
    return flag;
  } else {
    return (flag = true);
  }
}
let result = compareArrays([1, 2, 3], [1, 3, 2]);
if (result == true) {
  console.log("Both arrays are not same.");
} else {
  console.log("Both arrays are same.");
}
