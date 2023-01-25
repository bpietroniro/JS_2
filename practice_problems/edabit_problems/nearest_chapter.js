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
*/
