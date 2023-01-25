/*
 * - map to an array of areas
 * - reduce to the sum of those areas
 */

function totalArea(rectangles) {
  let areas = rectangles.map(([height, width]) => height * width);
  let totalArea = areas.reduce((total, currentArea) => total + currentArea);
  return totalArea;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));
