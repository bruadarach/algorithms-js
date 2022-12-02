function solution(my_string) {
  return [...my_string.replace(/[^0-9]/g, "")]
    .sort((a, b) => a - b)
    .map((ele) => Number(ele));
  // .map(Number)
}

console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(solution("abcde0")); // [0]
