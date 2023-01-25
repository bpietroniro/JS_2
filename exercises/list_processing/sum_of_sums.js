/*
 * - initialize totalSum at 0
 * - iterate through the array
 *   - for each index, get the sum of the elements from 0 through that index
 *   - add this to the totalSum
 * - return totalSum
 */

function sumOfSums(numArray) {
  return numArray.reduce((totalSum, currentNum, currentIndex) => {
    return totalSum + sum(numArray.slice(0, currentIndex + 1));
  }, 0);
}

function sum(array) {
  return array.reduce((sum, num) => sum + num);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
