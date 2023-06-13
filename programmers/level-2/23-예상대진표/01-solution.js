/*
    solution(8, 4, 7) // 3

                1    2  |  3   4  |  5   6  |  7   8
    round 1        1         4          5        7
    round 2              4                  7
    round 3                        MATCH!

    a와 b를 2로 나눈 몫은 다음 대진표에서의 번호가 된다.
    e.g) 1-2 -> 1, 3-4 -> 2, 5-6 -> 3, 7-8->4 
 */

function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2); // 4/2 = 2 // 2/2 = 1 // 1/2 = 1
    b = Math.ceil(b / 2); // 7/2 = 4 // 4/2 = 2 // 2/2 = 1
    // console.log(a, b);
    // 2 4
    // 1 2
    // 1 1
    answer++;
  }

  return answer;
}

console.log(solution(8, 4, 7)); // 3
