function solution(n) {
  const standard = n.toString(2).match(/1/g).length;

  while (n++) {
    if (standard === n.toString(2).match(/1/g).length) return n;
  }
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
