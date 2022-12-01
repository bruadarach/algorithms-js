function solution(array) {
  //return array[Math.floor(array.sort((a, b) => a - b).length / 2)];
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([9, -1, 0])); // 0
