/*
Write a function that takes a sentence string as an argument and
returns that string with every occurrence of a "number word"
converted to its corresponding digit character.

### Rules:
- input: a string of words separated by spaces (there may also be
  punctuation in the string)
- output: another string
- "number words" get replaced by digits in the output
- all other words and punctuation remain unchanged

### Data Structure:
- using regex, we can work with the input as a string
- we need a lookup table (object) containing number words as keys
  and digits as their values (only the digits 0-9 will be needed)

### Algorithm:
- build the lookup object
- loop through the keys of the lookup object
  - for each key, replace all occurrences of the key in the input
    string with the key's value; be careful with word boundaries!
  - save the result
- return the resulting string once all keys have been handled
*/

function wordToDigit(sentence) {
  const numberWords = {
    zero: '0', one: '1', two: '2', three: '3', four: '4',
    five: '5', six: '6', seven: '7', eight: '8', nine: '9',
  };

  Object.keys(numberWords).forEach(key => {
    let regex = new RegExp(`\\b${key}\\b`, 'g');
    sentence = sentence.replace(regex, numberWords[key]);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
