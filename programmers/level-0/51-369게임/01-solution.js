// 02-solution 보다 빠름

function solution(order) {
  return [...String(order)].reduce((acc, cur) => {
    if (cur === "3" || cur === "6" || cur === "9") acc++;
    return acc;
  }, 0);
}

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
