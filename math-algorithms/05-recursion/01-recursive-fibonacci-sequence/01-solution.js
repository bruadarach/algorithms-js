// Big-O for Iterative : O(n)
// Big-O for Recursive : O(2^n), 2 power n
// So, recursive is not a good solution for the fibonacci sequence problem.

function recursiveFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(6)); // 8
