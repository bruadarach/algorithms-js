function solution(n) {
  // number -> string -> split -> number -> accumulate
  return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution(1234)); // 10
console.log(solution(930211)); // 16
