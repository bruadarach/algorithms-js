function solution(n, k) {
  let answer = 0;
  const lamb = 12000;
  const drink = 2000;

  /* 
    1. Math.floor
    2. parseInt
    3.  ~~ 
  */

  // Solution 3
  // ~~ : Bitwise NOT => 비트 연산자를 Math.floor 대신 사용
  return lamb * n + drink * (k - ~~(n / 10));
}

console.log(solution(5, 1)); // 62000
console.log(solution(10, 3)); // 124000
console.log(solution(64, 6)); // 768000
