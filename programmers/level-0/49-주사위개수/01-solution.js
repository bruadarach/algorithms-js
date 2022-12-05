function solution(box, n) {
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}

console.log(solution([1, 1, 1], 1)); // 1
console.log(solution([10, 8, 6], 3)); //12
