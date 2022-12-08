// 1번 풀이보다 속도 빠름 (faster than the 1st solution)

function solution(num_list, n) {
  let result = [];

  while (num_list.length) {
    result.push(num_list.splice(0, n));
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
