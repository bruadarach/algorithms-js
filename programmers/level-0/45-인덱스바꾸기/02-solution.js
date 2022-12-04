function solution(my_string, num1, num2) {
  my_string = [...my_string];
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

console.log(solution("hello", 1, 2)); // 'hlelo'
console.log(solution("I love you", 3, 6)); // 'I veoyou"
