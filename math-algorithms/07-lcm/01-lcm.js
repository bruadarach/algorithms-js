function lcm(a, b) {
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  const gcdValue = gcd(a, b);
  return (a * b) / gcdValue;
}

console.log(lcm(12, 18)); // 36
console.log(lcm(2, 5)); // 10
console.log(lcm(2, 7)); // 14

// time complexity : O(log n) // O(log(min(a, b))
// space complexity : O(log n) // O(log(min(a, b))
