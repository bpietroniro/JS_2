function octalToDecimal(numberString) {
  let digits = numberString.split('').reverse().map(Number);

  return digits.reduce((decimalSum, digit, index) => {
    return digit * (8 ** index) + decimalSum;
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
