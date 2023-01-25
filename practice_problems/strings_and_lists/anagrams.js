function anagram(word, list) {
  const sortedWord = word.split('').sort().join('');
  return list.filter(candidate => isAnagram(candidate, sortedWord));
}

function isAnagram(candidate, sortedLetters) {
  if (candidate.length !== sortedLetters.length) return false;

  const sortedCandidate = candidate.split('').sort().join('');
  return sortedCandidate === sortedLetters;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
