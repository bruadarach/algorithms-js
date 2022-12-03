function solution(n, t) {
  // 0.05ms
  // return Array.from({ length: t }).reduce((acc, cur) => acc * 2, n);

  // 0.03ms
  for (let i = 0; i < t; i++) {
    n *= 2;
  }
  return n;
}

console.log(solution(2, 10)); // 2048 // 2, 4, 8, ...
console.log(solution(7, 15)); // 229376 // 7, 14, 28, ...
