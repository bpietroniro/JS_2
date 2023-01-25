/*
Write a function that takes a string and returns an object containing the
following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

### Rules
- input: a string containing at least one character
- output: an object with three properties representing percentages:
  - keys: lowercase, uppercase, and neither
  - values: strings representing a percentage value, formatted to two
    decimal points (e.g. 50% -> '50.00')
  - rounding? TBD

### Data Structure
- clearly the output will be an object
- we can probably keep the input as a string and use regex (which may
  involve arrays if we use `match`)
- we may want to store counts, as well as the length of the input, before
  using them to calculate percentages

### Algorithm
- initialize the output object
- save the number of regex matches for each of the three categories
- divide each by the length of the string
- format the result as a string with two digits after the decimal point
- save as the value for the appropriate key in output object
- return the object

*/

function letterPercentages(string) {
  const inputLength = string.length;
  let lower = string.match(/[a-z]/g) || [];
  let upper = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: (lower.length * 100 / inputLength).toFixed(2),
    uppercase: (upper.length * 100 / inputLength).toFixed(2),
    neither: (neither.length * 100 / inputLength).toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
