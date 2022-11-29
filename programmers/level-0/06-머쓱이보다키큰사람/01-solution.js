function solution(array, height) {
  return array.filter((ele) => {
    return ele > height;
  }).length;
}

console.log(solution([149, 180, 192, 170], 167)); // 3
console.log(solution([180, 120, 140], 190)); // 0
