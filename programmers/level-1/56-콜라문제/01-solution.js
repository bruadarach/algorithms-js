/*
    빈병 2개 -> 새병 1개
    빈병 20개 -> 20/2 -> 새병 10개

    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 -> 10
    1,2,3,4,5,6,7,8,9,10 -> 5
    1,2,3,4 -> 2 (+ 1)
    1,2 -> 1 
    1 (+1) -> 1

    10 + 5 + 2 + 1 + 1 = 19

    solution( 콜라를 받기 위해 마트에 주어야 하는 병 수, 빈병을 주면 마트에서 주는 콜라 수, 가지고 있는 빈병 갯수)
    solution(2, 1, 20) = 19
*/

/*
    1. 빈병 3개 -> 새병 1개
    2. 빈병 20개 -> 20/3 -> 새병 6개

    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 -> 6 (+2)
    1,2,3,4,5,6 -> (+2) 2
    1,2 -> (+2 ) 1

    6 + 2 + 1 = 9

    solution( 콜라를 받기 위해 마트에 주어야 하는 병 수, 빈병을 주면 마트에서 주는 콜라 수, 가지고 있는 빈병 갯수)
    solution(3, 1, 20) = 9


*/

function solution(a, b, n) {
  // 2, 1, 20
  let getCola = 0;

  while (n >= a) {
    getCola += Math.floor(n / a) * b; // 20/2 * 1 = 10 * 1 = 10 // 20/5 * 2 = 4 * 2 = 8
    n = Math.floor(n / a) * b + (n % a);
  }
  return getCola;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
console.log(solution(5, 2, 20)); // 12 // Edge Case : have * 2 empty bottles in each exchange
console.log(solution(5, 2, 30)); // 18 // Edge Case : have * 2 empty bottles in each exchange
