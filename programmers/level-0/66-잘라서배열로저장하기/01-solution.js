function solution(my_str, n) {
  result = [];
  while (my_str) {
    result.push(my_str.slice(0, n));
    my_str = my_str.slice(n);
  }
  return result;
}

console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
