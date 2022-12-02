function solution(n) {
  // 12345...
  // 2345...
  // 345...

  //   return Array.from({ length: n }, (_, i) => i + 1);

  let total = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    total = 0;
    for (let j = i; j <= n; j++) {
      total += j;
      if (total === n) {
        count++;
        // total = 0;
        break;
      } else if (total > n) {
        // total = 0;
        break;
      }
    }
  }
  return count;
}

console.log(solution(15)); // 4
