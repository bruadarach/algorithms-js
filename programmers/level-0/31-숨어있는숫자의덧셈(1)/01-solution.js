function solution(my_string) {
  //return [...my_string].filter((ele) => Number.isNaN(Number(ele)) === false);
  return [...my_string].reduce((acc, cur) => {
    if (Number.isNaN(Number(cur)) === false) {
      return acc + Number(cur);
    }
    return acc;
  }, 0);
}

console.log(solution("aAb1B2cC34oOp")); // 10
console.log(solution("1a2b3c4d123")); // 16
