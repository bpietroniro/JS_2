/*
Write a function that displays a four-pointed diamond inn an n x n grid,
where n is an odd integer supplied as an argument to the function.
You may assume that the argument will always be an odd integer.

### I/O
- input: an odd integer representing the number of stars in the middle of
  the diamond
- output: diamond is printed out, return value is unimportant

### Rules
- the diamond is "filled in"
- middle row of the diamond consists of n diamonds, no spaces
- generally, row k (counting from 1 through Math.ceil(n / 2) consists of
  (Math.ceil(n / 2) - k) spaces followed by 2k - 1 diamonds

### Data Structure
- rows will be strings, stored in array(s)
- we need a counter to keep track of which row we're building

### Algorithm
- build the top of the diamond as an array of strings
  - loop from 1 through Math.floor(n / 2) and use the formulas above
- build the middle row of the diamond
- reverse the "top" array; this becomes the bottom of the diamond
- concatenate these together in order, join with a newline, and log
*/

function diamond(n) {
  let topRows = [];
  let middleRow = '*'.repeat(n);
  const rowsToBuild = (n - 1) / 2;

  for (let rowNum = 1; rowNum <= rowsToBuild; rowNum += 1) {
    const numSpaces = ((n + 1) / 2) - rowNum;
    const numStars = 2 * rowNum - 1;
    topRows.push(' '.repeat(numSpaces) + '*'.repeat(numStars));
  }

  let bottomRows = topRows.slice().reverse();

  topRows.push(middleRow);
  console.log(topRows.concat(bottomRows).join('\n'));
}

diamond(1);
diamond(5);
diamond(9);
diamond(11);
