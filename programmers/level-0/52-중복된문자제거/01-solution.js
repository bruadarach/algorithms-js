function solution(my_string) {
  //   let result = "";
  //   [...my_string].forEach((v) => {
  //     if (!result.includes(v)) {
  //       result += v;
  //     }
  //   });
  //   return result;

  return [...my_string].reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc += cur;
    }
    return acc;
  }, "");
}

console.log(solution("people")); // "peol"
console.log(solution("We are the world")); // "We arthwold"
