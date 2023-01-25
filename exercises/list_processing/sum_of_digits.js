function sum(number) {
  return String(number).split('').map(Number).reduce((total, digit) => total + digit);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
