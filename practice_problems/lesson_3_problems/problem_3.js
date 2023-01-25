/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

## The Problem
- input: a word string
- output: boolean indicating whether the word string follows the block spelling rule

### Rules
- a valid word must have no repeat letters
- if the word uses a given letter, it cannot also use the letter's "block partner" letter
  - incidentally, this means the maximum valid word string length is 13
- case-insensitive

### Questions
- what should be the output for an empty string input?
- do we need to handle non-string input?
- do we need to handle non-alphabetic characters?

## Examples
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('bAbEl');      // false

## Data Structures
- input is a string; we can keep it as a string
- the block pairs list can be a look-up object
  - each pair appears twice, but with order switched, so you can look up any letter

## Algorithm
- convert the string to uppercase and remove non-alpha characters
- if the string's length (minus any non-alpha characters) is greater than 13, return false
- hardcode the lookup object (all uppercase)
- keep a running list of letters to check for; initialize it to an empty array
- iterate through the copy string by index
  - if the current letter isn't in the list of letters to check for:
    - add it to the list
    - add its partner from the lookup object to the list
  - else: return false
- return true
*/

const BLOCK_LETTERS = {
  B: 'O', O: 'B', X: 'K', K: 'X', D: 'Q', Q: 'D', C: 'P', P: 'C',
  N: 'A', A: 'N', G: 'T', T: 'G', R: 'E', E: 'R', F: 'S', S: 'F',
  J: 'W', W: 'J', H: 'U', U: 'H', V: 'I', I: 'V', L: 'Y', Y: 'L', Z: 'M', M: 'Z',
};

function isBlockWord(word) {
  word = word.toUpperCase().replace(/[^A-Z]/, '');
  if (word.length > 13) return false;

  let lettersToCheck = [];
  let len = word.length;
  for (let idx = 0; idx < len; idx += 1) {
    let currentLetter = word[idx];
    if (!lettersToCheck.includes(currentLetter)) {
      lettersToCheck.push(currentLetter);
      lettersToCheck.push(BLOCK_LETTERS[currentLetter]);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('bAbEl'));      // false
console.log(isBlockWord(''));
