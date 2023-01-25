/*
A 90-degree rotation of a matrix produces a new matrix in which each side
of the matrix is rotated clockwise by 90 degrees.

Write a function that takes an arbitrary MxN matrix, rotates it clockwise
by 90 degrees, and returns the result as a new matrix. The function should
not mutate the original matrix.

### I/O
- input: an array of M subarrays, which are each N-dimensional
- output: an NxM nested arraay

### Rules
- a 90-degree rotation of a matrix actually consists of the same
  subarrays as its transpose, only the order of the elements in each
  subarray is reversed
- therefore we can carry out the same procedure as with a transpose, but
  instead of starting with index 0 of the matrix, we start with the last
  subarray and iterate down to the first

*/

function rotate90(matrix) {
  let rotated = [];

  const cols = matrix.length;
  const rows = matrix[0].length;

  for (let rowIdx = 0; rowIdx < rows; rowIdx += 1) {
    rotated.push([]);
  }

  for (let colIdx = cols - 1; colIdx >= 0; colIdx -= 1) {
    let subArray = matrix[colIdx];

    for (let rowIdx = 0; rowIdx < rows; rowIdx += 1) {
      rotated[rowIdx].push(subArray[rowIdx]);
    }
  }

  return rotated;
}


const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
