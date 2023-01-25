function fibonacciRecursive(n) {
  if (n < 0) return ((-1) ** (n + 1)) * fibonacciRecursive(-n);
  if (n === 0) return 0;
  if (n <= 2) return 1;

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(12));
console.log(fibonacciRecursive(20));
console.log(fibonacciRecursive(-2));
console.log(fibonacciRecursive(-3));
console.log(fibonacciRecursive(-4));

function fibonacci(n) {
  if (n < 0) return ((-1) ** (n + 1)) * fibonacci(-n);
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let previous = 1;
  let current = 1;
  let next;
  for (let i = 3; i <= n; i += 1) {
    next = previous + current;
    previous = current;
    current = next;
  }

  return next;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(-2));
console.log(fibonacci(-3));
console.log(fibonacci(-4));

function fibonacciMemo(n, memo = {}) {
  if (n === 0 || n === 1) return n;
  if (!memo[n]) {
    memo[n] = fibonacciMemo(n - 2, memo) + fibonacciMemo(n - 1, memo);
  }

  return memo[n];
}

console.log(fibonacciMemo(20));
