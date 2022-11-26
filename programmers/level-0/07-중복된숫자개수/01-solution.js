function solution(array, n) {
  // 객체

  return array.filter((num) => {
    return num === n;
  }).length;
}

console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
console.log(solution([0, 2, 3, 4], 1)); // 0
