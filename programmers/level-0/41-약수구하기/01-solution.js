function solution(n) {
  let result = [1];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}

console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); // [1, 29]
