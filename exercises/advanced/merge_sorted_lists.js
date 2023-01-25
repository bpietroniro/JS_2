/*
Write a function that takes two sorted arrays as arguments and returns a
new array that contains all the elements from both input arrays, sorted.

You may not provide any solution that requires you to sort the result
array. You must build the result array one element at a time in the proper
order. Your solution should not mutate the input arrays.

### I/O
input: two pre-sorted arrays
output: one array containing all elements from both arrays (still sorted)

### Rules
- all elements from both arrays end up in the output array
  - this includes duplicates
- the output array must still be in sorted array

### Questions
- what are the sorting criteria?
- will the array elements always be numbers? will they be strings or other
  types? if so, what do we do about these?

### Data Structures
- clearly, arrays for input and output
- will need two different indexes simultaneously, maybe

### Algorithm
- initialize an empty output array
- let i = 0 (this is the index pointer for the first array)
- let j = 0 (this is the index pointer for the second array)
- set up a while loop that continues as long as i < arr1.length and
  j < arr2.length
  - if (arr1[i] < arr2[j])
    - push arr1[i] to the output array
    - increment i by 1
  - else if (arr1[i] > arr2[j])
    - push arr2[j] to the output array
    - increment j by 1
  - else
    - push arr1[i] to the output array
    - push arr2[j] to the output array
    - increment i by 1
    - increment j by 1

- if (j < arr2.length)
  - take a slice of arr2 from index j onwards
  - concatenate it to the output array
- if (i < arr1.length)
  - take a slice of arr1 from index i onwards
  - concatenate it to the output array

- return the output array
*/

function merge(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    } else if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j += 1;
    } else {
      merged.push(arr1[i], arr2[j]);
      i += 1;
      j += 1;
    }
  }

  if (j < arr2.length) {
    return merged.concat(arr2.slice(j));
  }
  if (i < arr1.length) {
    return merged.concat(arr1.slice(i));
  }

  return merged;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 4, 5], [1, 4, 5]));      // [1, 1, 4, 4, 5, 5]
console.log(merge([], []));                    // []
