/*
A "featured number" is an odd number that is a multiple of 7, with each
of its digits occurring exactly once.

For example, 49 is a featured number, but 98 is not (it is even), 97 is
not (it's not a multiple of 7), and 133 is not (two digit 3's).

Write a function that takes an integer as an argument and returns the
next featured number greater than the integer.

### Algorithm:
- if num is not divisible by 7:
  - increment num until it is divisible by 7
- if num is even, increment it once by 7

- while num is less than the max possible :
  - increment num by 14

- return num
*/

function featured(num) {
  const MAX = 9876543201;

  do {
    num += 1;
  } while (num % 7 !== 0);

  if (num % 2 === 0) num += 7;

  while (num <= MAX) {
    if (digitsUnique(num)) return num;
    num += 14;
  }

  return "There is no number that fulfills those requirements.";
}

function digitsUnique(num) {
  let digits = String(num);

  let tracker = [];
  for (let i = 0; i < digits.length; i += 1) {
    if (tracker[digits[i]]) {
      return false;
    } else {
      tracker[digits[i]] = true;
    }
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
