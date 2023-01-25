/*

## Understand the Problem

### Explicit requirements
- Write a function that takes two version numbers in string form
  as input and compares them.
- return values:
  - 1 if version1 > version2
  - -1 if version1 < version2
  - 0 if version1 === version2
  - if characters other than digits and . occur, return `null`

### Implicit requirements/knowledge
- valid version numbers appear to be strings (not actual Numbers)
  consisting of "sections" of digits separated by periods
- comparison between two version numbers involves comparing each
  "section" of numbers, reading from left to right
  - we compare the numbers as normal numbers; so 2 is less than 12
  - as soon as we come across a section where the numbers aren't
    the same, we can make a comparison.
- missing end sections and trailing zero sections are equivalent:
  1.2 === 1.2.0.0 should return `true`

### Questions for clarification
- is there a maximum number of digits that can appear in a "section"?
- what happens if we encounter two periods in a row with no digits
  in between?
- what happens if there's extra whitespace in the string, how should
  we handle that?


## Examples / Test Cases

### Input / Output
- input: two strings (intended to consist of digits and periods)
- output: integer (1, -1, 0) or `null`

### "Happy paths"
console.log(compareVersions('0.1', '1')); // -1 
console.log(compareVersions('1.0', '1')); // 0
console.log(compareVersions('1.0', '1.1')); // -1
console.log(compareVersions('1.2', '1.1')); // 1 
console.log(compareVersions('1.2.0.0', '1.18.2')); // -1 
console.log(compareVersions('13.37', '1.18.2')); // 1
console.log(compareVersions('13.37', '13.36')); // 1

### Edge cases
console.log(compareVersions());
console.log(compareVersions());

### Bad input
console.log(compareVersions('5.h53.54', '5.0')); // null
console.log(compareVersions('1.3..2', 1.3')); // ???
console.log(compareVersions(1.2, 1.3)); // non-string input; coerce to numbers, output -1
- extra whitespace?


## Data Structure

### data types
- input comes as strings; seems to make sense to split them into
  arrays using . as the delimiter
- then we can compare sections by index
  - make sure to convert each section from string to number first

### rules/requirements as data
- the rules can be handled with conditional statements

## Algorithm
- return null if either input string contains characters that are not
  digits or periods, or if either input contains consecutive periods
- split each input string into an array delimited by '.' and save
  these to variables
- find the greater length of the two and save it as `len`
- iterate through both arrays by index up to `len`
  - convert the elements at current index to integers
    - if one or the other is `NaN`, treat it as 0
  - if int from first array is larger than int from second,
    - return 1
  - else if it's smaller
    - return -1
  - else if they're equal
    - move on to the next index
- if the loop has ended without returning, return 0

*/

function compareVersions(version1, version2) {
  const validChars = /^[0-9]+(\.[0-9]+)*$/;
  if (!validChars.test(version1) || !validChars.test(version2)) return null;

  version1 = version1.split('.').map(Number);
  version2 = version2.split('.').map(Number);
  const len = Math.max(version1.length, version2.length);

  for (let index = 0; index < len; index += 1) {
    let firstVersionPart = version1[index] || 0;
    let secondVersionPart = version2[index] || 0;

    if (firstVersionPart > secondVersionPart) {
      return 1;
    } else if (firstVersionPart < secondVersionPart) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
console.log(compareVersions('0.1', '1'));          // -1
console.log(compareVersions('1.0', '1'));          // 0
console.log(compareVersions('1.0', '1.1'));        // -1
console.log(compareVersions('1.2', '1.1'));        // 1
console.log(compareVersions('1.2.0.0', '1.18.2')); // -1
console.log(compareVersions('13.37', '1.18.2'));   // 1
console.log(compareVersions('13.37', '13.36'));    // 1
console.log(compareVersions('5.h53.54', '5.0'));   // null
console.log(compareVersions('1.3..2', '1.3'));     // ???
// console.log(compareVersions(1.2, 1.3));            // non-string input; coerce to numbers, output -1
