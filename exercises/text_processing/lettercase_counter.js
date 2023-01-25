function letterCaseCount(string) {
  function matchCount(regex) {
    let matches = string.match(regex);
    if (!matches) return 0;
    return matches.length;
  }

  return {
    lowercase: matchCount(/[a-z]/g),
    uppercase: matchCount(/[A-Z]/g),
    neither: matchCount(/[^A-Z]/gi),
  };
}


console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));
