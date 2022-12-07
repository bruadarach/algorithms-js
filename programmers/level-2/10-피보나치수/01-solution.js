function solution(n) {
  // 런타임 에러
  // 메모이제이션(Memoization)
  //   if (n <= 1) return n;
  //   return solution(n - 1) + solution(n - 2);

  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push((result[i - 1] + result[i - 2]) % 1234567);
  }
  return result[n];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
