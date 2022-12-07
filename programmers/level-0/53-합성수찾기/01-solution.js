function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let temp = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) temp++;
    }
    if (temp >= 3) result++;
  }
  return result;
}

console.log(solution(10)); // 5
console.log(solution(15)); // 8
