function solution(s) {
  let count = 0;

  for (paren of s) {
    count += paren === "(" ? 1 : -1;
    if (count < 0) return false;
  }

  return count === 0;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
