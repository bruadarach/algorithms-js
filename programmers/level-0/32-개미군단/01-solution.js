function solution(hp) {
  const power = [5, 3, 1];
  let total = 0;

  for (let i = 0; i < 3; i++) {
    if (Number.isInteger(hp / power[i]) === false) {
      total += Math.floor(hp / power[i]);
      hp = hp % power[i];
    } else {
      total += Math.floor(hp / power[i]);
      return total;
    }
  }
}

console.log(solution(23)); // 5
console.log(solution(24)); // 6
console.log(solution(999)); // 201
