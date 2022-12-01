function solution(price) {
  //   return price >= 100000 && price < 300000
  //     ? Math.floor(price - price * 0.05)
  //     : price >= 300000 && price < 500000
  //     ? Math.floor(price - price * 0.1)
  //     : price >= 500000
  //     ? Math.floor(price - price * 0.2)
  //     : price;

  return price >= 500000
    ? Math.floor(price * 0.8)
    : price >= 300000
    ? Math.floor(price * 0.9)
    : price >= 100000
    ? Math.floor(price * 0.95)
    : price;
}

console.log(solution(150000)); // 142,500
console.log(solution(580000)); // 464,000
