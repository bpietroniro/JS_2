/*
Problem Description
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

input: a string of numbers
output: TBD (possibly the input's Luhn number; possibly a boolean)

Questions:
- will the input strings always be of the same length?
- do I need to handle anything besides digits and spaces in the input string?

Examples:
"2323 2005 7766 3554"
"0000 0000 0000 0000"
"2121 2121 2121 2121"

"1111 1111 1111 1111"
"3333 3333 3333 3333"

Data Structures
- probably worth splitting the string, reversing it, and mapping to an array of integers

Algorithm
- remove all non-digit characters from the input string
- split the input string into an array of integers, and reverse it
- iterate through the array by index
  - for every odd index, double the current element
  - if the result is >= 10, subtract 9
  - reassign the current index this new value
- when this process is done, reduce the entire array to the sum of its elements
- if the sum is divisible by 10, return true; otherwise return false

*/

function calculateChecksum(numStr) {
  let digits = numStr.replace(/[^0-9]/g, '').split('').reverse().map(Number);

  for (let idx = 1; idx < digits.length; idx += 2) {
    let doubled = digits[idx] * 2;
    let newNum = doubled < 10 ? doubled : doubled - 9;
    digits[idx] = newNum;
  }

  return digits.reduce((sum, digit) => sum + digit);
}

function isLuhn(numStr) {
  return calculateChecksum(numStr) % 10 === 0;
}

console.log(isLuhn("2323 2005 7766 3554"));
console.log(isLuhn("0000 0000 0000 0000"));
console.log(isLuhn("2121 2121 2121 2121"));

console.log(isLuhn("1111 1111 1111 1111"));
console.log(isLuhn("3333 3333 3333 3333"));

/*
Now, write a function that can add a check digit to make the input number valid per the Luhn formula and return the original number plus that digit.

Algorithm:
- append a 0 to the input string
- calculate the current checksum of this new string
- determine the remainder when the checksum is divided by 10
- the check digit is 10 - remainder
- append the check digit to the input string and return the result
*/

function appendCheckDigit(numStr) {
  const checksum = calculateChecksum(numStr + String(0));
  const remainder = checksum % 10;

  const checkDigit = remainder === 0 ? '0' : String(10 - remainder);
  console.log(checkDigit);
  return numStr + checkDigit;
}

console.log(isLuhn(appendCheckDigit("2323 2005 7766 355")));
console.log(isLuhn(appendCheckDigit("0000 0000 0000 000")));
console.log(isLuhn(appendCheckDigit("2121 2121 2121 212")));
console.log(isLuhn(appendCheckDigit("1111")));
