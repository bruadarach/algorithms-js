function solution(arr, divisor) {
  const answer = arr.filter((ele) => ele % divisor === 0);
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5)); // [5,10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
