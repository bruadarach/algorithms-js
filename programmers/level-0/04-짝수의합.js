/*
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n) {
  /* Solution 1 */
  //   var answer = 0;
  //   for (let i = 1; i <= n; i++) {
  //     if (i % 2 == 0) {
  //       answer += i;
  //     }
  //   }
  //   return answer;

  /* Solution 2 */
  //console.log(Array.from(Array(n).keys())); // [ start from 0 to n-1]
  //console.log(Array.from(Array(n).keys()).map((x) => x + 1)); // [ start from 1 to n]

  //   return;
  //   Array.from(Array(n).keys())
  //     .map((x) => x + 1)
  //     .filter((x) => x % 2 == 0);
  // [ start from 1 to n]

  /* Solution 3 */
  //   return Array.from(Array(n).keys())
  //     .map((x) => x + 1)
  //     .reduce((acc, cur) => acc + (cur % 2 == 0 ? cur : 0), 0);

  /* Solution 4 */
  return Array.from({ length: n }, (v, i) => i + 1).reduce(
    (acc, cur) => acc + (cur % 2 == 0 ? cur : 0),
    0
  );
}

console.log(solution(10)); // 30
console.log(solution(4)); // 6
