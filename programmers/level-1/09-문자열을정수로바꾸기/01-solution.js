function solution(s) {
  if (s[0] === "-") {
    return -Number(s.slice(1));
  }
  return Number(s);
}

console.log(solution("1234")); // 1234
console.log(solution("-1234")); // -1234
