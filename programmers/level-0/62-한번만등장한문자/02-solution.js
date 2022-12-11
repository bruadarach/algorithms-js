function solution(s) {
  let result = [];
  for (let char of s)
    if (s.indexOf(char) === s.lastIndexOf(char)) result.push(char);
  return result.sort().join("");
}

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"
