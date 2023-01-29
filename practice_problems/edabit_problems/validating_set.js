/*
In the game Set, three cards form a set if each of the cards are identical
or completely different for each of the four properties. All three cards
must:

- Have the same color or different colors.
- Have the same number or different numbers.
- Have the same shades or different shades.
- Have the same shape or different shapes.

The four properties are:

- Colors: red, purple, green
- Numbers: 1, 2, 3
- Shades: empty, lined, full
- Shapes: squiggle, oval, diamond

In this problem, a set is represented by an array containing three cards.
Each card is represented by an object of properties and values. Write a
function that determines whether three cards constitute a valid set.

### I/O
input: an array of three objects
  - the objects represent cards and have four properties:
    color, number, shade, and shape
    values are strings, except for number which are integers
output: a boolean indicating whether the input objects constitute a "set"

### Rules
- basically, it's not allowed for *exactly two* of the cards to have an
  identical value for any property.
  - all different is fine; all three the same is fine.
- for each set of three cards, we must check the values for each property,
  comparing the values between the three cards

### Algorithm
- create an array of four strings: "color", "number", "shade", and "shape"
- for each of these strings (keys):
  - map the `cards` argument to an array of values for the current key
  - in this mapped array, 
*/

function isSet(cards) {
}


console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])); // true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
])); // true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])); // false
