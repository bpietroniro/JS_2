/*
Write a function that displays an 8-pointed star in an n x n grid, where n is an
odd integer that is supplied as an argument to the function. The smallest such
star you need to handle is a 7 x 7 grid (i.e. n = 7).

### I/O
input: an odd integer representing the dimension of the grid
output: return value is unimportant; a star shape is logged to the console

### Rules
- the star shape is made up of "stars" (asterisks) and spaces
- the star shape will consists of n "rows" (strings)
- the middle row will consist of n stars
- all other rows contain 3 stars, with varying numbers of spaces between them
- there will always be a star at index (n - 1) / 2
Top half of the star:
- for the kth row (k starts at 0) there will also be a star at:
  - index k
  - index (n - k - 1)
- for the kth row regarding spaces and stars:
  - k spaces at the start of the row
  - a star
  - ((n - 3) / 2) - k spaces
  - another star
  - another ((n - 3) / 2) - k spaces
  - another star
  - BASTA
Bottom half of the star is the top half reversed

### Edge cases
We don't really have any, since we're assured that n is an odd integer no
smaller than 7.

### Data Structures
- array to store the rows
- the rows are strings

### Algorithm
- initialize empty array to contain the top half rows
- let middleIndex = (n - 1) / 2
- for (let k = 0; k < middleIndex; k += 1)
  - initialize an empty string
  - let padding = ((n - 3) / 2) - k
  - build the kth row:
    - add k spaces to the string
    - add a star
    - add padding spaces to the string
    - add another star
    - add padding spaces
    - add a third star
  - push the string to the rows array
- make a copy of the top rows array; reverse it; save the result (these are
  the bottom rows now)
- create a string of n stars and push it to the top rows array
- concatenate the top rows array with the bottom rows array
- print the array, joined with a newline, to the console
*/

function star(n) {
  let topRows = [];
  const middleIndex = (n - 1) / 2;

  for (let k = 0; k < middleIndex; k += 1) {
    let row = '';

    const margin = ' '.repeat(k);
    const padding = ' '.repeat(((n - 3) / 2) - k);

    row += margin + ['*', '*', '*'].join(padding);
    topRows.push(row);
  }

  let bottomRows = topRows.slice().reverse();
  topRows.push('*'.repeat(n));

  console.log(topRows.concat(bottomRows).join('\n'));
}

star(7);
star(9);
star(11);
star(13);
