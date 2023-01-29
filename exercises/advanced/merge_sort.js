function merge(arr1, arr2) {
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();
  let merged = [];

  while (arr1Copy.length > 0 && arr2Copy.length > 0) {
    merged.push(arr1Copy[0] >= arr2Copy[0] ? arr2Copy.shift() : arr1Copy.shift());
  }

  return merged.concat(arr1Copy.length === 0 ? arr2Copy : arr1Copy);
}

/*
Write a function that takes an array argument and returns a new array that
contains the values from the input array in sorted order. The function should
sort the array using the merge sort algorithm. You may assume that every element
of the array will be of the same data type—either all numbers or all strings.

### Input/Output
input: an array of numbers or an array of strings
output: a new array containing the same elements as the input, but sorted

### Examples
- for the simple case of a 2-element array:
  - split the array in half into two nested (single-element) arrays
  - once we are dealing with single element arrays, compare those elements
    - merge them back into an array in sorted order

- the base case is when both arrays have length 1.
  - in this cases, we return them, merged using our helper function

- for the case of a 3-element array:
  - split the array from index 0 to Math.ceil(length / 2), and from 
    Math.ceil(length / 2) to the end of the array

mergeSort([3, 1, 2])
-> merge(mergeSort([3, 1]), mergeSort([2]) call merge on these two subarrays
-> merge(merge(mergeSort([3]), mergeSort([1])), [2])
-> merge(merge([3], [1]), [2])
-> merge([1, 3], [2])
-> [1, 2, 3]

### Rules
if the array is of length 1:
  return the array
otherwise:
  split the array in half
  call `mergeSort` on each of the halves
  call `merge` with the results of the previous step as arguments

### Questions
- no nested arrays in the input, right?
- always sort increasing, right?
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midpoint = arr.length / 2;
  let firstHalf = arr.slice(0, midpoint);
  let secondHalf = arr.slice(midpoint);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([5, 3]));
console.log(mergeSort([6, 2, 7, 1, 4]));
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
console.log(mergeSort([1]));
console.log(mergeSort([]));
