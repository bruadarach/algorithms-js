function solution(n, m) {
  // GCD
  let gcd = 1;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }
  return [gcd, (n * m) / gcd];
}

console.log(solution(3, 12)); // [3,12]
console.log(solution(2, 5)); // [1,10]
