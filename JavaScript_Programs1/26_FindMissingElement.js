// Find the missing element in an array
function findMissing(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
console.log(findMissing([1, 2, 4, 5, 6], 6));