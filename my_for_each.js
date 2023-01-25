function myForEach(array, func) {
  const len = array.length;
  for (let i = 0; i < len; i += 1) {
    func(array[i], i, array);
  }
}
