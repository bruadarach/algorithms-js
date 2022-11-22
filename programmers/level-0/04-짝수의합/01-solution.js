function solution(n) {
  //   let answer = 0;
  //   for (let i = 1; i <= n; i++) {
  //     if (i % 2 == 0) {
  //       answer += i;
  //     }
  //   }
  //   return answer;

  let answer = 0;
  for (let i = 2; i <= n; i += 2) answer += i;
  return answer;
}

console.log(solution(10)); // 30
console.log(solution(4)); // 6
