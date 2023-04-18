function partTimeJob(k) {
  let result = 0;
  const wallet = [500, 100, 50, 10, 5, 1];
  for (let i = 0; i < wallet.length; i++) {
    if (k > 0) {
      const sum = Math.floor(k / wallet[i]);
      result += sum;
      k = k - wallet[i] * sum;
    }
  }
  return result;
}

// 4000원을 받았을 때 500원짜리 동전 8개를 반환합니다.
const output1 = partTimeJob(4000);
console.log(output1); // --> 8

// 4972원을 받았을 때 500원짜리 동전 9개, 100원짜리 동전 4개, 50원짜리 동전 1개, 10원짜리 동전 2개, 1원짜리 동전 2개, 총 18개를 반환합니다.
const output2 = partTimeJob(4972);
console.log(output2); // --> 18
