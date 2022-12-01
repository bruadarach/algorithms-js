function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    (num) => n % num === 0
  ).length;
}

console.log(solution(20)); // 6
console.log(solution(100)); // 9
