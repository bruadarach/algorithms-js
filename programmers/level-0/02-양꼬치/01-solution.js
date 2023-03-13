function solution(n, k) {
  // 10인분 주문 -> 음료 1개 서비스
  // 양꼬치 1인분 : 12000원 n개
  // 음료수 1병 : 2000원 k개 (- 갯수 필요여부 확인)
  let answer = 0;
  const lamb = 12000;
  const drink = 2000;

  // 만약 양꼬치 주문이 10인분 마다 음료수 1개 마이너스가 필요.
  // 1. 양꼬치 주문이 10인분 미만이라면 정가 계산.
  // 2. 양꼬치 주문이 10인분 이상인 경우, 10으로 나눈 값 만큼 drink 갯수 빼고 계산.

  /* 
      1. Math.floor
      2. parseInt
      3.  ~~ 
    */

  // Solution 1 : Math.floor() 사용
  //   return n < 10
  //     ? lamb * n + drink * k
  //     : lamb * n + drink * (k - Math.floor(n / 10));
  return lamb * n + drink * (k - Math.floor(n / 10));
}

console.log(solution(5, 1)); // 62000
console.log(solution(10, 3)); // 124000
console.log(solution(64, 6)); // 768000
