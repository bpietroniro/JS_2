/*
Write a function that takes a year as an argument and returns the number of
'Friday the 13ths' in that year. You may assume that the year is greater than
1752. You may also assume that the same calendar will remain in use for the
foreseeable future.

- initialize a counter
- create a new Date object for January 13 of the input year
- while the month is less than 12:
  - if the day is 5, increment counter by 1
  - increment month by 1
- return counter
*/

function fridayThe13ths(year) {
  let friday13thCount = 0;
  let thirteenthOfMonth = new Date(`January 13, ${year}`);

  for (let month = 1; month < 12; month += 1) {
    if (thirteenthOfMonth.getDay() === 5) {
      friday13thCount += 1;
    }
    thirteenthOfMonth.setMonth(month);
  }

  return friday13thCount;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));
