function myOwnEvery(array, func) {
  const len = array.length;

  for (let i = 0; i < len; i += 1) {
    if (!func(array[i], i, array)) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));
