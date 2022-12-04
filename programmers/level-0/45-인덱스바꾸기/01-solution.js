function solution(my_string, num1, num2) {
  let result = [...my_string];
  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join("");
}

console.log(solution("hello", 1, 2)); // 'hlelo'
console.log(solution("I love you", 3, 6)); // 'I veoyou"
