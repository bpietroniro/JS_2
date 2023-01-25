function triangle(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 !== 180 
    || [angle1, angle2, angle3].some(angle => angle === 0)) {
    return 'invalid';
  }

  let largest = Math.max(angle1, angle2, angle3);
  if (largest > 90) {
    return 'obtuse';
  } else if (largest < 90) {
    return 'acute';
  } else {
    return 'right';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
