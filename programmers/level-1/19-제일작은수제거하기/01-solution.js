// 배열 요소 제거 === Array.splice(index, 1)
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length === 0 ? [-1] : arr;
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]
