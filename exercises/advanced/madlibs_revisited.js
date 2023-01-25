/*
Build a madlibs program that takes a text template as input, plugs in a
selection of randomized nouns, verbs, adjectives, and adverbs into that
text, and then returns it.
You can build your lists of nouns, verbs, adjectives, and adverbs directly
into your program.
Your program should read this text and, for each line, place random words
of the appropriate types into the text and return the result.

input: a template, i.e. a madlibs "skeleton"
  - possibly a string with special indicators for the words that need to
    be replaced
  - possibly an array of strings, with just the parts-of-speech words
    in the elements that are to be filled in with randomly generated words
output: returns a string

### Rules
- the program must generate random words from hard-coded lists and plug
  them in to the input text in the appropriate places
- one random word per "slot"
- a different random word every time (might wind up being a repeat word,
  but only by chance)

### Data Structures
- for the hardcoded word lists: an object where the keys are parts of
  speech and the values are arrays of strings (words), prepended with
  an dollar sign
- the template is a string with parts of speech indicated by a $, e.g.
  "The $adjective brown $noun $adverb $verb the $adjective $noun"
  - we replace the starred words one by one

### Algorithm
- build the random words lookup object
- split the input string into an array of words separated by whitespace
- map this array:
  - if the word doesn't start with an dollar sign, don't change it
  - if it does start with an dollar sign
    - take a slice of the word starting from index 1
    - if it's a key in the lookup object, map the word to a string
      randomly chosen from the array value of that key
    - if it's not a key in the lookup object, just return word
- return the mapped array joined into a string with a single space
*/

function madlibs(template) {
  const wordBank = {
    $adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    $noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    $verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    $adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  }

  let words = template.split(/\s+/).map(word => {
    let sanitizedWord = word.replace(/[^a-z\$]/g, '');

    if (sanitizedWord[0] === '$' && !!wordBank[sanitizedWord]) {
      let randomWord = randomElementOf(wordBank[sanitizedWord]);
      return word.replace(sanitizedWord, randomWord);
    } else {
      return word;
    }
  });

  return words.join(' ');
}

function randomElementOf(list) {
  let randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

const template1 = "The $adjective brown $noun $adverb $verb the $adjective $noun, who $adverb $verb its $noun and looks around."

console.log(madlibs(template1));

const template2 = "The $adjective $brown $noun $adverb $verb the $adjective $noun, who $adverb $verb its $noun and looks around."

console.log(madlibs(template2));

const template3 = "The $adjective $brown $noun!!! $adverb $verb the $adjective $noun, who $adverb $verb the $noun's $noun and looks around."

console.log(madlibs(template3));
