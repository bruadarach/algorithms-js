function solution(numbers) {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return num.reduce((acc, cur) => {
    return numbers.indexOf(cur) === -1 ? acc + cur : acc;
  }, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6
