function solution(left, right) {
  let temp = [1];
  let result = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) temp.push(j);
    }
    temp.length % 2 === 0 ? (result += i) : (result -= i);
    temp = [1];
  }
  return result;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
