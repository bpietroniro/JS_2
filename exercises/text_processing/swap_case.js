function swapCase(string) {
  return string.split('').map(letter => {
    if (/[a-z]/.test(letter)) {
      return letter.toUpperCase();
    } else if (/[A-Z]/.test(letter)) {
      return letter.toLowerCase();
    } else {
      return letter;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
