function solution(balls, share) {
  let factorial = (n) => {
    // if (n === 0) return 1;
    // return n * factorial(n - 1);
    return n === 0 ? BigInt(1) : BigInt(n) * factorial(n - 1);
  };
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); // 10
