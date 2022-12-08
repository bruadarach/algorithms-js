function solution(array) {
  return array.reduce((acc, cur) => {
    acc += [...String(cur)].reduce((acc2, cur2) => {
      if (cur2 === "7") acc2++;
      return acc2;
    }, 0);
    return acc;
  }, 0);
}

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
