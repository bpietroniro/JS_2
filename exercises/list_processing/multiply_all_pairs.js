function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach(m => {
    arr2.forEach(n => products.push(m * n));
  });

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
