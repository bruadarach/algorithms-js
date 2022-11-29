function solution(num_list) {
  let result = [0, 0];
  num_list.forEach((element) => {
    element % 2 ? result[1]++ : result[0]++;
  });
  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [2,3]
console.log(solution([1, 3, 5, 7])); // [0,4]
