function solution(price) {
  const discount = [
    [500000, 0.8],
    [300000, 0.9],
    [100000, 0.95],
  ];

  for (let i = 0; i < discount.length; i++) {
    if (price >= discount[i][0]) {
      return Math.trunc(price * discount[i][1]);
    }
  }
  return price;
}

console.log(solution(150000)); // 142,500
console.log(solution(580000)); // 464,000
