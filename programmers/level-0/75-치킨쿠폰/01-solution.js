function solution(chicken) {
  let coupon = Math.floor(chicken / 10);
  let couponLeft = chicken % 10;
  let freeChicken = coupon;

  while (coupon + couponLeft >= 10) {
    let temp = coupon + couponLeft;
    coupon = Math.floor(temp / 10);
    couponLeft = temp % 10;
    freeChicken += coupon;
  }
  return freeChicken;
}

console.log(solution(100)); // 11
console.log(solution(1081)); // 120
