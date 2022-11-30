function solution(arr) {
  let stack = [arr[0]];

  for (let i = 1; i <= arr.length - 1; i++) {
    if (stack[stack.length - 1] !== arr[i]) {
      stack.push(arr[i]);
    }
  }
  return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
