function leadingSubstrings(string) {
  return string.split('').map((_, index) => {
    return string.slice(0, index + 1);
  });
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));
