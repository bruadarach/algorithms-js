function ocean(target, type) {
  // bag 이라는 배열에 금액을 만들 수 있는 경우의 수를 기록
  // 각 인덱스 no# = 만드려는 금액 을 의미
  // ex) target = 5, type = [1, 2, 5] 면
  // bag[3] = 2  => 3원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 (1*3, 1 + 2)
  // bag[4] = 3  => 4원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 (1*4, 1*2 + 2, 2*2)
  // bag[5] = 4  => 5원을 만드는 경우의 수 = 1만 사용 & 1,2 함께 사용 & 1, 2, 5 함께 사용 (1*5 , 1*3 + 2, 1 + 2*2, 5*1)
  // 0 을 만들 수 있는 경우는 아무것도 선택하지 않으면 되기 때문에 bag[0] = 1 로 초기값 설정
  let bag = [1];

  // 인덱스 no# = 만드려는 금액 이기 때문에
  // bag 을 target 금액만큼의 길이를 가진 배열을 만들어 주고,
  // 경우의 수를 저장하기 위해 초기값은 모두 0으로 만들어 준다
  for (let i = 1; i <= target; i++) bag[i] = 0;
  // 돈의 종류가 담겨있는 배열을 순차적으로 탐색
  for (let i = 0; i < type.length; i++) {
    // target 금액까지 순차적으로 1씩 증가하면서
    for (let j = 1; j <= target; j++)
      // bag의 인덱스가 type[i] 보다 큰 구간만
      // (작은 구간은 type[i]로 만들 수 없는 금액이기 때문에 탐색할 필요가 없다)
      if (type[i] <= j)
        // 기존 경우의 수에 type[i]를 뺀 금액을 만들 수 있는 경우의 수를 더해준다
        bag[j] += bag[j - type[i]];
  }
  // bag 의 target 인덱스에 target 금액을 훔칠 수 있는 경우의 수가 쌓이므로
  // 해당 값을 리턴해 준다
  return bag[target];
}

var output = ocean(50, [10, 20, 50]);
console.log(output); // 4

var output = ocean(100, [10, 20, 50]);
console.log(output); // 10

var output = ocean(30, [5, 6, 7]);
console.log(output); // 4
