/*
You have a bank of switches before you, numbered from 1 to n. Every switch is
connected to exactly one light that is initially off. You walk down the row of
switches and toggle every one of them. You walk back to the beginning of the
row and start another pass. On this second pass, you toggle switches 2, 4, 6,
and so on. On the third pass, you go back to the beginning again, this time
toggling switches 3, 6, 9, and so on. You continue to repeat this process
until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and
returns an array of the lights that are on after n repetitions.

### Input/Output
- input: n (the total number of switches)
- output: an array of numbers

### Rules:
- there are n switches, labeled starting at 1
- all "lights" are initially off
- the process of toggling switches is carried out n times
- let k be the interval between toggled switches
  - on the first pass, k is 1; we also start at switch 1
  - on the second pass, k is 2; we also start at switch 2
  - etc.
  - on the nth pass, k is n, and we only toggle switch n

### Examples:
lightsOn(5)     // [1, 4]
lightsOn(100)   // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
lightsOn(0)     // ??? empty array?
### Data Structures
- an array to represent the lights/switches
  - for simplicity, we'll make the array of length n + 1, and just ignore
    index 0 (that way we can start counting at 1 as the problem does
  - by "ignoring" we mean we'll set it to `false` and leave it that way
  - every element will be initialized to `false`; toggling a switch means
    reassigning the corresponding array element to the boolean opposite of
    its current value
- an integer, n
- another integer to keep track of the current pass' interval, let's say k
- an output array (this will be the result of filtering the lights array at
  the end after all toggling is done)

### Algorithm:
- build the "lights" array (length n + 1, all elements `false`)
- loop with variable `k` from 1 through n:
  - loop with variable `switchNumber` starting at k, going up through n, and
    incrementing by k
    - toggle the value at each index (`switchNumber`) in the lights array
- map the array to an array of index numbers, but with a rule:
  - if the value is `false`, return 0, otherwise return the actual index
- filter this array by values greater than 0
- return the result
*/

function lightsOn(n) {
  let lights = [];
  for (let light = 0; light <= n; light += 1) {
    lights.push(false);
  }

  for (let k = 1; k <= n; k += 1) {
    for (let switchNumber = k; switchNumber <= n; switchNumber += k) {
      lights[switchNumber] = !lights[switchNumber];
    }
  }

  return lights.map((lightOn, lightNumber) => {
    return lightOn ? lightNumber : 0;
  }).filter(lightNumber => lightNumber !== 0);
}

console.log(lightsOn(5));
console.log(lightsOn(100));
console.log(lightsOn(0));
console.log(lightsOn(1));
console.log(lightsOn(200));
