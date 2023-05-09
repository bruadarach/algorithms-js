function solution(numbers) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const permutation = (arr, selectNum) => {
    const result = [];
    if (selectNum === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const permuted = permutation(rest, selectNum - 1);
      const attached = permuted.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  };

  const numbersArr = numbers.split("");
  const result = new Set();
  for (let i = 1; i <= numbersArr.length; i++) {
    const permuted = permutation(numbersArr, i);
    permuted.forEach((el) => {
      const num = Number(el.join(""));
      if (isPrime(num)) result.add(num);
    });
  }
  return result.size;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2
