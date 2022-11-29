function solution(n) {
  //   return Array.from({ length: n }, (_, index) => index + 1)
  //     .filter((ele) => n % ele === 0)
  //     .reduce((cur, acc) => {
  //       return cur + acc;
  //     }, 0);

  return Array.from({ length: n }, (_, index) => index + 1).reduce(
    (acc, cur) => {
      if (n % cur === 0) {
        return (acc += cur);
      }
      return acc;
    },
    0
  );

  /* [1, 2, ...n] 

  1.  return Array.from({ length: n }, (_, index) => index + 1)

  2. return Array.from(Array(n), (_, index) => index + 1);

  3.    return Array(n).fill().map((_, i) => i + 1);

  4. return [...Array(n).keys()].map((i) => i + 1);
  */
}

console.log(solution(12)); // 28 // [1,2,3,4,6,12]
console.log(solution(5)); // 6 // 1,5
