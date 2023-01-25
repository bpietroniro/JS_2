function myMap(array, func) {
  let map = [];

  array.forEach(element => {
    map.push(func(element));
  });

  return map;
}
