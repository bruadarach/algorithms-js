function solution(s) {
  //   if (s[0] === ")") return false;
  // 올바르지 않은 괄호의 조건
  // - ')'로 시작하면 false
  // - '())' -> -1이 되면 false
  // - '(()(' -> 최종 카운트가 -1이어도 false

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // if (count >= 0) {
    //   if (s[i] === "(") {
    //     count++;
    //   } else {
    //     count--;
    //   }
    count += s[i] === "(" ? 1 : -1;
    // } else {
    //   return false;
    if (count < 0) return false;
    // }
  }
  //   if (count !== 0) return false;
  //   return true;
  return count === 0 ? true : false;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
