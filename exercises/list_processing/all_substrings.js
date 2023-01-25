function leadingSubstrings(string) {
  return string.split('')
    .map((_, index) => string.slice(0, index + 1));
}

function allSubstrings(string) {
  return string.split('')
    .map((_, index) => leadingSubstrings(string.slice(index)))
    .reduce((result, substrings) => result.concat(substrings), []);
}

console.log(allSubstrings('abcde'));
