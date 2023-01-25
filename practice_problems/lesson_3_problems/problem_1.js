/*
Write a program that cleans up user-entered phone numbers so that they can be
sent as SMS messages. Other than digits, the number may also contain special
characters such as spaces, dash, dot, and parentheses that should be ignored.

Rules:
- If the phone number is less than 10 digits, assume that it is a bad number.
- If the phone number is 10 digits, assume that it is good.
- If the phone number is 11 digits and the first number is 1,
  trim the 1 and use the last 10 digits.
- If the phone number is 11 digits and the first number is not 1, then it is a bad number.
- If the phone number is more than 11 digits, assume that it is a bad number.

input: string containing digits (to be used) and special characters (to be ignored)
output: string of 10 digits (for bad input, 10 zeroes)

Examples (good):
1(508)-317-8125
45-548-25328
23&5029*54- 43

Examples (bad):
539482903
2-526-543-6578
4552945064760

Questions:
- what to do about an empty string?
- what to do with non-string input values?

Data Structure
- input comes as a string, and we should be able to keep it as a string

Algorithm
- make a new string by replacing all non-digits in the input string with an empty string
- if the new string's length is 10, return the new string
- if the new string's length is 11 and the first digit is 1
  return a slice of the new string from index 1 to the end
- return '0000000000'

*/

function cleanNumber(numStr) {
  numStr = numStr.replace(/[^0-9]/g, '');
  if (numStr.length === 10) return numStr;
  if (numStr.length === 11  && numStr[0] === '1') return numStr.slice(1);
  return '0000000000';
}

console.log(cleanNumber('1 (508)-317-8125'));
console.log(cleanNumber('45-548-25328'));
console.log(cleanNumber('23&5029*54- 43'));
console.log(cleanNumber('539482903'));
console.log(cleanNumber('2-526-543-6578'));
console.log(cleanNumber('4552945064760'));
