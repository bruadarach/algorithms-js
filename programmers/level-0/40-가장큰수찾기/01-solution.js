function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

console.log(solution([1, 8, 3])); // [8,1]
console.log(solution([9, 10, 11, 8])); // [11,2]
