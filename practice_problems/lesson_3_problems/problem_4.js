/*
You are given a list of numbers in a "short-hand" range where only the
significant part of the next number is written, because we know the
numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents
[1, 3, 7, 12, 14, 21]).

Some people use different separators for theirranges (ex. "1-3, 1-2",
"1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]).
Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

Examples:
"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, ... 611
"23545, 64:11" --> 23545, 23564, 23565, ..., 23611
"21, 3, 8, 5" --> 21, 23, 28, 35
"213, 5, 34, 2-8" --> 213, 215, 234, 242, 243, 244, 245, 246, 247, 248

## PROBLEM
- input: a shorthand string containing numbers and number ranges
  separated by a comma and a space
- output: an array containing every number represented in the shorthand

### Rules
- numbers and ranges appear in ascending order
  - for comma-separated values, you must compare digits by place value to
    determine when to increment the lowest omitted power of ten
    - if you cannot make the next number without counting backwards
      from the previous number, you must increment the power of ten
    - in other words: if the current digit is less than the digit of the same
      place value in the previous number, then we need to add one to the next
      highest place value
    - if the digits are the same, we move on to comparing the next digit
  - range numbers actually follow the same rules

So, how do we know when to increment?
- look at the first digit (reading left to right) of the next number
- note this digit's place value; this is the whole number's length minus the
  current index
- compare this digit to the digit with the same place value in the previous
  number
  - if it's greater than the previous, then assume that we don't need to
    increment; just use the same higher place value(s) that are found in
    the previous number
  - but if it's less than the previous number's correlating digit, then we
    need to increment the next highest place value from the previous number

### Questions
- will numbers consistently be in shorthand, or do we need to deal with them
  sometimes being in full form already???

## DATA STRUCTURE
- we're given a string; we should split it by ', ' into an array, which
  will yield a list of numbers and ranges which we can then parse one by one
- the list of separators can be handled with regex

## ALGORITHM
- split the string into a list of elements (shorthand numbers and ranges)
- initialize the output array

- handle the first element in the list
  - if it's just a number, push the number to the output array
  - if it's a range:
    - split by the separator to get individual numbers in an array
    - push the first element to the output array
    - increment the numeric value of the first element by 1
    - process the range array

- iterate through the rest of the list starting at index 1
  - if the current element is a range (or more than one range):
    - split by the separator to get individual numbers in an array
    - process the range array
  - if current element is not a range, just a number:
    - get the number's full form based on the last element in the output array
    - push the full form to the output array

- map the output array to a list of Numbers and return it

### splitting by separator:
- element.match(/[0-9]+/g)

### processing range array(rangeEndpoints):
- map the array (probably by hand, though) to an array of full-form numbers
  - for index 0, get the full form based on the last element in output array
  - for all others, get the full form based on the previous element's full form
- for each index in the mapped array up through len - 2:
  - fill in the range from index to index + 1 (exclusive)
- push the last element of the array to the output

### getting full form of next element(previous, current):
- let prevLength = previous.length, curLength = current.length
- get the first digit of current
- compare this digit with the digit at index (prevLength - curLength) in previous
  - if this digit is greater AND prevLength > curLength:
    - prepend the first (prevLength - curLenth) digits of previous to current
  - else:
    - if prevLength === curLength, prepend 1 to current
    - else:
      - get the digit at index (prevLength - curLength - 1) of previous and add 1
      - prepend this digit to current
      - prepend the first (prevLength - curLength - 1) digits of previous
        to current
- return current
*/
/*

### prepending first n digits(str1, str2, n)
- take a slice of str1 starting at index 0 and going to index n
- prepend that slice to str2 and return

### filling in a range(leftNum, rightNum):
- loop from the left number to the right number (exclusive),
  incrementing by one and pushing each number to the output array
*/

// declare the result as a global variable so that it's available to all helpers
let output;

function parseShorthand(numString) {
  // initialize the result
  output = [];

  // split the input string into an array of numbers and ranges
  let numsAndRanges = numString.split(/,\s*/);

  // handle the first element separately (not totally necessary, but avoids having
  // to put a superfluous guard clause elsewhere)
  let firstElement = numsAndRanges[0];
  if (isRange(firstElement)) {
    let rangeEndpoints = splitRange(firstElement);
    processRange(rangeEndpoints);
  } else {
    output.push(firstElement);
  }

  // handle the remaining elements
  numsAndRanges.slice(1).forEach(element => {
    if (isRange(element)) {
      let rangeEndpoints = splitRange(element);
      processRange(rangeEndpoints);
    } else {
      let prevNum = output[output.length - 1];
      output.push(getFullNumber(prevNum, element));
    }
  });

  return output.map(Number);
}

function isRange(element) {
  return /[^0-9]/.test(element);
}

function splitRange(range) {
  return range.split(/[\-:]|\.\./);
}

function processRange(rangeEndpoints) {
  let mostRecentNum = output[output.length - 1];

  // map the "endpoints" from shorthand numbers to full numbers
  rangeEndpoints = rangeEndpoints.map(num => {
    if (mostRecentNum === undefined) {
      mostRecentNum = num;
      return num;
    }

    let nextNum = getFullNumber(mostRecentNum, num);
    mostRecentNum = nextNum;
    return nextNum;
  });

  // for however many consecutive ranges there are, fill them all in
  for (let index = 0; index < rangeEndpoints.length - 1; index += 1) {
    fillRange(rangeEndpoints[index], rangeEndpoints[index + 1]);
  }

  // take care of the last endpoint
  output.push(rangeEndpoints[rangeEndpoints.length - 1]);
}

function fillRange(start, end) {
  start = Number(start);
  end = Number(end);

  // push intermediate numbers to the result array
  for (let num = start; num < end; num += 1) {
    output.push(String(num));
  }
}

function getFullNumber(previous, current) {
  let prevLength = previous.length;
  let curLength = current.length;
  let thisDigit = current[0];
  let otherDigit = previous[prevLength - curLength];

  // copy any necessary digits over from the previous number
  if (thisDigit > otherDigit) {
    if (prevLength > curLength) {
      current = prependFirstNDigits(previous, current, prevLength - curLength);
    }
  // alter digits as necessaary
  } else {
    if (prevLength === curLength) {
      current = '1' + current;
    } else {
      let newDigit = String(Number(previous[prevLength - curLength - 1]) + 1);
      current = newDigit + current;
      current = prependFirstNDigits(previous, current, prevLength - curLength - 1);
    }
  }

  return current;
}

function prependFirstNDigits(sliceFrom, copyTo, n) {
  return sliceFrom.slice(0, n) + copyTo;
}

console.log(parseShorthand('1, 3, 7, 2, 4, 1'));
console.log(parseShorthand('1-3, 1-2'));
console.log(parseShorthand('1..3, 1..2'));
console.log(parseShorthand('1:5:2'));
console.log(parseShorthand('104-2'));
console.log(parseShorthand('104-02'));
console.log(parseShorthand('545, 64:11'));
console.log(parseShorthand("23545, 64:11"));
console.log(parseShorthand("21, 3, 8, 5"));
console.log(parseShorthand("213, 5, 34, 2-8"));
