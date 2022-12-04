function solution(n) {
  const standard = numberOfOne(n);
  n = n + 1;

  while (numberOfOne(n) !== standard) n++;
  return n;
}

function numberOfOne(n) {
  //   return [...n.toString(2)].reduce((acc, cur) => {
  //     if (cur === "1") acc++;
  //     return acc;
  //   }, 0);
  return n.toString(2).match(/1/g).length;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
