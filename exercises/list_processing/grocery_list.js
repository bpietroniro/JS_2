function buyFruit(fruitList) {
  return fruitList.reduce((fruits, currentFruit) => {
    return concatMultiple(fruits, currentFruit[0], currentFruit[1]);
  }, []);
}

function concatMultiple(array, element, count) {
  let newArray = [...array];

  for (let n = 0; n < count; n += 1) {
    newArray.push(element);
  }

  return newArray;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
