function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    // if (signs[idx] === false) {
    //   return acc - cur;
    // }
    // return acc + cur;
    return signs[idx] ? acc + cur : acc - cur;
  }, 0);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
