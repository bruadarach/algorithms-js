function solution(n) {
  return String(n)
    .split("")
    .reduce((cur, acc) => Number(acc) + Number(cur), 0);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
