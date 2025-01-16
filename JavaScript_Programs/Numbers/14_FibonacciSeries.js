// Generate Fibonacci series up to n terms

function fibonacci(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}
let result = fibonacci(10);
console.log("Fibonacci series : " + result); //Fibonacci series : 0,1,1,2,3,5,8,13,21,34
console.log(result); //[0,1,1,2,3,5, 8,13,21,34]
console.log("Fibonacci series converted to string: " + result.join(" ")); //Fibonacci series converted to string: 0 1 1 2 3 5 8 13 21 34
