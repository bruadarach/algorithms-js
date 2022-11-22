function solution(n) {
  /*
  console.log(Array.from(Array(n).keys())); // [ start from 0 to n-1]
  console.log(Array.from(Array(n).keys()).map((x) => x + 1)); // [ start from 1 to n]

  console.log(
    Array.from(Array(n).keys())
      .map((x) => x + 1)
      .filter((x) => x % 2 == 0)
  ); // [ even numbers from 1 to n]
  */

  /* Solution 1 */
  //   return Array.from(Array(n).keys())
  //     .map((x) => x + 1)
  //     .reduce((acc, cur) => acc + (cur % 2 == 0 ? cur : 0), 0);

  /* Solution 2 */
  return Array.from({ length: n }, (v, i) => i + 1).reduce(
    (acc, cur) => acc + (cur % 2 == 0 ? cur : 0),
    0
  );

  /* Solution 3 */
  //   return Array(n)
  //     .fill()
  //     .map((_, i) => i + 1)
  //     .filter((v) => v % 2 === 0)
  //     .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(10)); // 30
console.log(solution(4)); // 6
