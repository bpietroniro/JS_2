function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else if (idx % 2 === 1) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));

function staggeredCaseIgnore(string) {
  let upper = true;
  return string
    .split('')
    .map(char => {
      if (!/[a-z]/i.test(char)) {
        return char;
      } else if (upper) {
        upper = false;
        return char.toUpperCase();
      } else {
        upper = true;
        return char.toLowerCase();
      }
    }).join('');
}

console.log(staggeredCaseIgnore('I Love Launch School!'));
console.log(staggeredCaseIgnore('ALL_CAPS'));
console.log(staggeredCaseIgnore('ignore 77 the 444 numbers'));
