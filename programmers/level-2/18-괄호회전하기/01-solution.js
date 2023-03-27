function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (isCorrect(s)) answer++;
    s = s.slice(1) + s[0];
  }
  return answer;
}

const isCorrect = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") stack.push(s[i]);
    else {
      if (stack.length === 0) return false;
      const pop = stack.pop();
      if (
        (pop === "(" && s[i] !== ")") ||
        (pop === "[" && s[i] !== "]") ||
        (pop === "{" && s[i] !== "}")
      )
        return false;
    }
  }
  if (stack.length) return false;
  return true;
};

console.log(solution("[](){}")); //	3
console.log(solution("}]()[{")); //	2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
