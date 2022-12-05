// 효율성 테스트 통과
// 스택(Stack)

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
  }

  return stack.length ? 0 : 1;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
