function solution(brown, yellow) {
  const total = brown + yellow;
  const result = [];

  // 1. total 구하기
  // 가로, 세로 최소 길이 시작 => [3,3]
  for (let i = 3; i <= total; i++) {
    // 2. total의 약수 구하기
    // x(가로) * y(세로) 쌍 찾기
    if (total % i === 0) {
      result.push([i, total / i]);
    }
  }

  //  3. 약수 중에서 `(x-2) * (y-2) === yellow`를 만족하는 [가로, 세로] 구하기 (단, 가로 >= 세로)
  return result
    .find(([width, height]) => (width - 2) * (height - 2) === yellow) // find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
    .reverse(); // 가로 길이가 세로 길이보다 더 크기 때문에 reverse() 메서드를 사용하여 배열의 순서를 바꿔준다.
}

console.log(solution(10, 2)); // [4, 3] // [가로, 길이]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // 	[8, 6]

/*
    1. total 구하기
    2. total의 약수 구하기
    3. 약수 중에서 `(x-2) * (y-2) === yellow`를 만족하는 [가로, 세로] 구하기 (단, 가로 >= 세로)
*/

/*
    - brown + yellow = x * y
    - 가로, 세로 최소 길이 시작 => [3,3]
    - x(가로) * y(세로)
    - (x-2) * (y-2) === yellow
 */
