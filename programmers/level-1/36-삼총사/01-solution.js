function solution(number) {
  let result = 0;
  //   for (let i = 0; i < number.length - 2; i++) {
  //     if (number.slice(i, i + 3).reduce((acc, cur) => acc + cur) === 0) count++;
  //   }

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          result++;
        }
      }
    }
  }
  return result;
}

console.log(solution([0, 1, 2, 3, 4])); // 0
console.log(solution([-2, 3, 0, 2, -5])); // 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // 5
console.log(solution([-1, 1, -1, 1])); // 0
