/*
Create a function that returns which chapter is nearest to the page you're
on. If two chapters are equidistant, return the chapter with the higher
page number.

### I/O
input: two arguments
  - an object containing chapter names as keys and page numbers as values
  - an integer representing the current page we're on
output: a string; the name of the chapter that's nearest to current page

### Rules
- find the chapter whose page number yields the shortest distance from
  the current page number
- if any chapters have the same distance, return the one with the highest
  page number

### Data Structures
- we can make a new object with the same property names, but different
  values: store the absolute value after subtracting the current page
  number from each of the original values

### Algorithm
- initialize a new empty object
- for every object key in the first argument:
  - add a property in the new object with the same name
  - give it a value of oldvalue - second argument
- take the entries of the new object and filter them
  - find the minimum of the absolute value of the values
  - filter based on whether current entry's value is that minimum
- if there's only one result, return the first element of that result
  (which should be the chapter name)
- if there's two results:
  - choose the one with a positive value
  - return the first element of that chosen result
*/
function nearestChapter(chapt, page) {
  let result = {};

  Object.keys(chapt).forEach(chapterName => {
    result[chapterName] = chapt[chapterName] - page;
  });

  const absoluteDistances = Object.values(result).map(Math.abs);
  const minDistance = Math.min(...absoluteDistances);

  result = Object.entries(result).filter(([_, distance]) => {
    return Math.abs(distance) === minDistance;
  });

  if (result.length === 1) {
    return result[0][0];
  } else {
    return result.filter((_, distance) => distance > 0)[0][0];
  }
}

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10));

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200));

console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3));
