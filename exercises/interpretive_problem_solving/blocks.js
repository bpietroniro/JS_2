/*
A collection of spelling blocks has two letters per block:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words
that do not use both letters from any given block. You can also only use
each block once.

Write a function that takes a word string as an argument and returns true if
the word can be spelled using the set of blocks, false otherwise. You can
consider the letters to be case-insensitive when you apply the rules.

### I/O
- input: a word (string)
- output: a boolean indicating whether the word can be spelling using the
  given set of "blocks" (letter pairs) and rules

### Rules for valid block words
- each letter can only be used once
- only one letter from each pair can be used
- comparisons are case-insensitive

### Data Structure
- a lookup object for the letter pairs
- an array of letters that have already appeared in the string (as we look
  through it)
- keep the input as a string

### Algorithm
- build the lookup object
- initialize an array of "found" letters
- for each letter in input word:
  - if the current letter is "found", return false
  - otherwise, add the current letter and its partner letter to "found"
- if we get to this point, return true
*/

function isBlockWord(word) {
  const blockPairs = {
    B: 'O', O: 'B', X: 'K', K: 'X', D: 'Q', Q: 'D', C: 'P', P: 'C', N: 'A',
    A: 'N', G: 'T', T: 'G', R: 'E', E: 'R', F: 'S', S: 'F', J: 'W', W: 'J',
    H: 'U', U: 'H', V: 'I', I: 'V', L: 'Y', Y: 'L', Z: 'M', M: 'Z',
  };

  let found = [];
  word = word.toUpperCase();
  for (let idx = 0; idx < word.length; idx += 1) {
    if (found.includes(word[idx])) {
      return false;
    } else {
      found.push(word[idx]);
      found.push(blockPairs[word[idx]]);
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apPLE'));      // false
