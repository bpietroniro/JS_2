/*
### I/O
- input: a string to be encrypted, and an integer representing the number
  of positions to shift each letter to the right in the alphabet
- output: a string that is the result of shifting each letter from the
  plaintext by the given number of positions

### Rules
- only letters get encrypted; all other characters remain unchanged in the
  output string
- case is preserved
- alphabetical letters get mapped to other alphabetical letters

### Data Structures
- make two alphabet strings, one for lowercase and one for uppercase, that
  double the alphabet (to make "wrapping around" easy)
- iterate through plaintext as a string
- initialize the output as a string

### Algorithm
- build the alphabet constants
- initialize output string
- loop through input string
  - if current character is lowercase:
    - find its first index in the lowercase alphabet constant
    - add 'key' to that index
    - letter at the new index in the lowercase constant
    - concatenate this to the output
  - else if current character is uppercase:
    - do the same thing just with the uppercase alphabet constant
  - else:
    - concatenate the current character to the output string
- return the output string
*/

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2);

function caesarEncrypt(plaintext, key) {
  let ciphertext = '';

  for (let idx = 0; idx < plaintext.length; idx += 1) {
    let char = plaintext[idx];
    if (/[a-z]/.test(char)) {
      ciphertext += lowercase[lowercase.indexOf(char) + key];
    } else if (/[A-Z]/.test(char)) {
      ciphertext += uppercase[uppercase.indexOf(char) + key];
    } else {
      ciphertext += char;
    }
  }

  return ciphertext;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
