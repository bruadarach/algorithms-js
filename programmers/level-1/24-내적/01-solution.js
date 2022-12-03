function solution(a, b) {
  // let result = 0;
  // a.forEach((num, i) => {
  //   result += num * b[i];
  // });
  // return result;

  return a.reduce((acc, cur, i) => (acc += a[i] * b[i]), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2
