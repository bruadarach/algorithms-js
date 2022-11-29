function solution(money) {
  //return [Math.floor(money / 5500), money - Math.floor(money / 5500) * 5500];
  return [Math.floor(money / 5500), money % 5500];
}

console.log(solution(5500));
console.log(solution(15000));
