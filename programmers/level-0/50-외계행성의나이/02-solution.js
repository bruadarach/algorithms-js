function solution(age) {
  return [...String(age)].map((v) => "abcdefghij"[v]).join("");
}

console.log(solution(23)); // 'cd'
console.log(solution(51)); // 'fb'
console.log(solution(100)); // 'baa'
