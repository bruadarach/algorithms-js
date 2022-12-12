// 효율성 테스트 실패

// 시간초과 효율성 실패

function solution(n) {
  //   return Array.from({ length: n }, (_, i) => i + 1);
  let result = 0;
  for (let i = 2; i <= n; i++) {
    // for (let j = 2; j < i; j++) { // Math.sqrt(i)
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) break;
      if (i === j + 1) result++;
    }
  }
  return result + 1; // default 2
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
