function solution(num1, num2) {
  /* Math.floor, parseInt, ~~ */
  return Math.floor((num1 / num2) * 1000);
  //   return parseInt((num1 / num2) * 1000);
  //   return ~~((num1 / num2) * 1000);
}

console.log(solution(3, 2)); // 1500
console.log(solution(7, 3)); // 2333
console.log(solution(1, 16)); // 62
