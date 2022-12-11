function solution(s) {
  let count = {};
  [...s].forEach((char) =>
    count[char] !== undefined ? count[char]++ : (count[char] = 1)
  );

  result = "";
  total = 0;
  for (v in count) count[v] === 1 ? (result += v) : (total += count[v]);

  return total === 0 ? [...s].sort().join("") : [...result].sort().join("");

  // slower than the above solution
  //   const keys = Object.keys(count);
  //   return keys.filter((key) => count[key] === 1).sort().join('')
}

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"
