function solution(n, t) {
  return n * Math.pow(2, t); // 0.02ms
  return n * 2 ** t; // 0.02ms
}

console.log(solution(2, 10)); // 2048
console.log(solution(7, 15)); // 229376
