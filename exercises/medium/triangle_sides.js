function triangle(side1, side2, side3) {
  if ([side1, side2, side3].includes(0)) return 'invalid';
  let longest = Math.max(side1, side2, side3);
  if (side1 + side2 + side3 - longest <= longest) return 'invalid';

  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
