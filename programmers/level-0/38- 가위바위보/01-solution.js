function solution(rsp) {
  const match = {
    0: 5,
    2: 0,
    5: 2,
  };

  let result = "";
  for (i of rsp) result += match[i];
  return result;
}

console.log(solution("2")); // '0'
console.log(solution("205")); // '052
