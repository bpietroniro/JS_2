function leadingSubstrings(string) {
  return string.split('')
    .map((_, index) => string.slice(0, index + 1));
}

function allSubstrings(string) {
  return string.split('')
    .map((_, index) => leadingSubstrings(string.slice(index)))
    .reduce((result, substrings) => result.concat(substrings), []);
}

function palindromicSubstrings(string) {
  const substrings = allSubstrings(string)
    .filter(substring => substring.length > 1);

  return substrings.filter(isPalindrome);
}

function isPalindrome(string) {
  const halfLength = Math.floor(string.length / 2);

  for (let index = 0; index < halfLength; index += 1) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

console.log(palindromicSubstrings('abcd'));       // []
console.log(palindromicSubstrings('madam'));      // [ "madam", "ada" ]

console.log(palindromicSubstrings('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromicSubstrings('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
