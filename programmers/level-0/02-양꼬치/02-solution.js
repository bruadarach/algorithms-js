function solution(n, k) {
  let answer = 0;
  const lamb = 12000;
  const drink = 2000;

  /* 
      1. Math.floor
      2. parseInt
      3.  ~~ 
    */

  // Solution 2 : parseInt
  return lamb * n + drink * (k - parseInt(n / 10));
}

console.log(solution(5, 1)); // 62000
console.log(solution(10, 3)); // 124000
console.log(solution(64, 6)); // 768000
