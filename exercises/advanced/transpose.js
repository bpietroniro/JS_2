/*
The transpose of a nxn matrix is the matrix that results from exchanging
the rows and columns of the original matrix. 

Write a function that takes an array of arrays representing a nxn matrix
and returns the transpose of that matrix. Don't modify the origin matrix
object; produce a new matrix.

input: a n-element array, where each element is a n-element array
output: another nxn array where the rows from the input are now columns

### Rules
- elements at index i of each subarray of the input become the elements of
  the subarray at index i in the output

### Data Structures
- nested arrays

###
- initialize an empty output array
- push matrix.length empty arrays to the output array
- loop through the input array
  - loop through the subarray
    - for each index, push the element at the current index to the
      subarray at the same index in the output array
- return the output array
*/

function transposeSquare(matrix) {
  let transposed = [];

  const dimension = matrix.length;
  for (let row = 0; row < dimension; row += 1) {
    transposed.push([]);
  }

  for (let idx = 0; idx < dimension; idx += 1) {
    let subArray = matrix[idx];

    for (let subIdx = 0; subIdx < dimension; subIdx += 1) {
      transposed[subIdx].push(subArray[subIdx]);
    }
  }

  return transposed;
}

let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transposeSquare(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

matrix = [
  [1, 5, 8, 0],
  [4, 7, 2, 5],
  [3, 9, 6, 8],
  [2, 0, 9, 4]
];

console.log(transposeSquare(matrix));

/*
Modify the function above so that it works with any two-dimensional
matrix with at least one row and one column.

### Approach
- we'll need to store both dimensions: cols and rows
  - "cols" will be the length of the input
  - "rows" will be the length of any element of the input
- push "rows" empty subarrays to build the output array
- the outer loop will go up to "cols"
- the inner loop will go up to "rows"
*/

function transpose(matrix) {
  let transposed = [];

  const cols = matrix.length;
  const rows = matrix[0].length;

  for (let rowIdx = 0; rowIdx < rows; rowIdx += 1) {
    transposed.push([]);
  }

  for (let colIdx = 0; colIdx < cols; colIdx += 1) {
    let subArray = matrix[colIdx];

    for (let rowIdx = 0; rowIdx < rows; rowIdx += 1) {
      transposed[rowIdx].push(subArray[rowIdx]);
    }
  }

  return transposed;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
