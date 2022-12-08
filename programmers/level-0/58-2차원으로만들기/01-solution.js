function solution(num_list, n) {
  result = [];
  temp = [];
  for (let i = 0; i < num_list.length; i++) {
    temp.push(num_list[i]);
    if (temp.length === n) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
