// 통과

function solution(n) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) result++;
  }
  return result;
}

function isPrime(i) {
  //   for (let j = 2; j < i; j++) {
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) return false;
  }
  return true;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
