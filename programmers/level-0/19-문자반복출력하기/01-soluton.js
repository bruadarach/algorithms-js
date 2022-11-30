function solution(my_string, n) {
  let result = "";
  my_string.split("").forEach((char) => {
    result += char.repeat(n);
  });
  return result;
}

console.log(solution("hello", 3)); // "hhheeellllllooo"
