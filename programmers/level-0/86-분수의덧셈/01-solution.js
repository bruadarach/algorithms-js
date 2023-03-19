function solution(numer1, denom1, numer2, denom2) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const denom = denom1 * denom2;
  const numer = numer1 * denom2 + numer2 * denom1;
  const g = gcd(numer, denom);
  return [numer / g, denom / g];
}

console.log(solution(1, 2, 3, 4)); // [5,4]
console.log(solution(9, 2, 1, 3)); // [29,6]
