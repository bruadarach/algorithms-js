function solution(s) {
  result = 0;
  const temp = s.split(" ");
  temp.forEach((num, idx) => {
    num !== "Z" ? (result += Number(num)) : (result -= Number(temp[idx - 1]));
  });
  return result;
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // -3
