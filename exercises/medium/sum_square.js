/*
Write a function that computes the difference between the square of the
sum of the first n positive integers and the sum of the squares of the
first n positive integers.
*/

function sumSquareDifference(n) {
  let squareOfSum = n * (n + 1) / 2;

  let sumOfSquares = 0;
  for (let int = 1; int <= n; int += 1) {
    sumOfSquares += int ** 2;
  }

  return squareOfSum ** 2 - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
