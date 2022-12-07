function solution(n) {
  for (i = 1; i <= n; i++) {
    let total = 1;

    for (let i = 1; i <= n; i++) {
      total *= i;

      if (total === n) {
        return i;
      } else if (total > n) {
        return i - 1;
      }
    }
  }
}

console.log(solution(3628800)); // 10
console.log(solution(7)); // 3
