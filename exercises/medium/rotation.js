function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

/*
Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit to the left, moving the
first digit to the end.

### Rules:
- only the last n digits of the number get altered; the previous
  digits remained unchanged
- treating the last n digits as their own, rotate exactly one
  digit to the "end" of the array
  - in other words, the nth digit from the end get moved to the end
### Data Structure:
- the number will be easier to process a string or as an array of
  digit chars

### Algorithm:
- convert number to a string and split into an array of chars
- take a slice of this array from index length - n to the end
- call rotateArray on this slice
- replace the digits of the first array from index length - n to
  the end with the rotated slice
- return the array, joined, and converted back to a number
*/

function rotateRightmostDigits(number, n) {
  let digits = String(number);
  let rotated = rotateArray(digits.slice(digits.length - n).split('')).join('');
  let result = digits.slice(0, digits.length - n).concat(rotated);
  return Number(result);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
Write a function that takes an integer as an argument and returns
the maximum rotation of that integer.

### Rules:
- call rotateRightmostDigits on the number repeatedly, with varying
  values of n
  - first n = number.length, then n = number.length - 1, etc., all
    the way down to n = 2
- return the result (also as a number)
  - drop any leading zeroes

### Example:
8703529146
7035291468
7352914680
7329146805
7321468059
7321680594
7321605948
7321609485
7321609854
7321609845

### Data Structure:
- this can be done with strings of digits

### Algorithm:
- loop from n down through 2 (inclusive):
  - reassign number to rotateRightmostDigits(number, n)
- return number
*/

function maxRotation(number) {
  let length = String(number).length;
  for (let n = length; n >= 2; n -= 1) {
    number = rotateRightmostDigits(number, n);
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
