/*
The Vigenere Cipher uses a series of Caesar Ciphers based on the letters of a
keyword. Each letter of the keyword is treated as a shift value.
The shift value used for a letter is equal to its index value in the alphabet.
This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The same
holds for the uppercase letters.
Applying the Vigenere Cipher is done sequentially for each character by applying
the current shift value to a Caesar Cipher for that particular character.
Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher.

### I/O
- input: plaintext, any sequence of characters
         keyword, any sequence of (alphabetic?) characters
- output: ciphertext, encrypted version of the plaintext (same length)

### Rules
- each letter of the keyword is a shift value based on the letter's position
  in the alphabet
- the shift sequence dictated by the keyword's letters is applied repeatedly
  (in sequence) from the beginning of the plaintext to the end
- this shift sequence is case-insensitive, but case should be preserved in the
  output string
- non-alphabetic characters remain unchanged

### Questions
- do we need to handle non-alphabetic characters in the keyword?
  - for now, no
  - BUT, be able to handle a keyword that's longer than the plaintext

### Data Structure
- we might as well use the same double alphabet strings as before
- probably an array of integers to represent the shift sequence
- string for output

### Algorithm
- build the alphabet strings
- split the keyword into an array of characters
- map this to an array of numbers, each is the index of the lowercase form of
  the letter in the lowercase alphabet string -- call this array "sequence"
- initialize a "shiftIndex" variable at 0
- loop through the plaintext
  - grab currentChar
  - currentKey = sequence[shiftIndex]
  - if the current character is lowercase:
    - encrypt it using currentKey and the lowercase string
    - add to ciphertext
  - else if the current character is lowercase:
    - encrypt it using currentKey and the uppercase string
    - add to ciphertext
  - else
    - add currentChar to ciphertext
  - if shiftIndex < 3, increment it by 1, otherwise reset it to 0
- return ciphertext
*/

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
const uppercase = lowercase.toUpperCase();

function vigenereEncrypt(plaintext, keyword) {
  let ciphertext = '';

  const keySequence = keyword
    .split('')
    .map(letter => lowercase.indexOf(letter.toLowerCase()));
  let keyIndex = 0;

  plaintext.split('').forEach(char => {
    let currentKey = keySequence[keyIndex];
    if (/[a-z]/.test(char)) {
      ciphertext += encryptChar(char, lowercase, currentKey);
    } else if (/[A-Z]/.test(char)) {
      ciphertext += encryptChar(char, uppercase, currentKey);
    } else {
      ciphertext += char;
      return;
    }

    keyIndex = keyIndex < keySequence.length - 1 ? keyIndex + 1 : 0;
  });

  return ciphertext;
}

function encryptChar(char, alphabet, key) {
  return alphabet[alphabet.indexOf(char) + key];
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'A'));
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa'));
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'cab'));
console.log(vigenereEncrypt("Dog", 'Rabbit'));
console.log(vigenereEncrypt("", 'Rabbit'));
