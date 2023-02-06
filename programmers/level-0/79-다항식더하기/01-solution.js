function solution(polynomial) {
  let xNum = 0;
  let num = 0;
  polynomial.split(" + ").forEach((el) => {
    if (el.includes("x")) {
      if (el.split("x")[0] === "") xNum += 1;
      xNum += Number(el.split("x")[0]);
    } else {
      num += Number(el);
    }
  });

  if (xNum === 1) xNum = "";
  if (xNum === 0) return `${num}`;
  if (num === 0) return `${xNum}x`;
  return `${xNum}x + ${num}`;
}
console.log(solution("3x + 7 + x")); // "4x + 7"
console.log(solution("x + x + x")); // "3x"
console.log(solution("x")); // "x" //=> "1x" (X)
console.log(solution("x + 1")); // "x+1" //=> "1x+1" (X)
