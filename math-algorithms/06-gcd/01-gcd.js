function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(18, 24)); // 6
console.log(gcd(10, 15)); // 5
console.log(gcd(10, 21)); // 1

// time complexity : O(log n) // O(log(min(a, b))
// space complexity : O(log n) // O(log(min(a, b))
