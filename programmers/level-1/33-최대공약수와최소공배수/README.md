## 문제 설명 [(link)](https://school.programmers.co.kr/learn/courses/30/lessons/12940?language=javascript)

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

<br>

## 제한 사항

두 수는 1이상 1000000이하의 자연수입니다.

<br>

## 입출력 예

| n   | m   | return  |
| --- | --- | ------- |
| 3   | 12  | [3, 12] |
| 2   | 5   | [1, 10] |

<br>

## 입출력 예 설명

<br>

### 입출력 예 #1

> 위의 설명과 같습니다.

<br>

### 입출력 예 #2

> 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.

<br>

## 노트

### 최대 공약수(Greatest Common Divisor)

- 최대공약수는 두 수 A와 B의 공통된 약수 중에 가장 큰 정수이다.
- 최대공약수를 구하는 가장 쉬운 방법은 2부터 min(A, B)까지 모든 정수로 나누어보는 방법이다.

```js
let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};
```

<br>

### 최소 공배수 (Least Common Multiple)

- 두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수이다.
- lcm을 1부터 시작하여 점차 lcm++하면서 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교한다.

```js
let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};
```

<br>

## 유클리드 호제법 (Euclidean algorithm) 사용

<br>

### 최대 공약수(Greatest Common Divisor)

- num1를 num2로 나눈 나머지를 r이라고 했을 때, 최대공약수(num1, num2) = 최대공약수(num2, r)과 같다.
- r이 0이라면, 그 때의 num2가 최대공약수이다.

```js
function solution(num1, num2) {
  return num1 % num2 === 0 ? num2 : solution(num2, num1 % num2);
}

console.log(solution(16, 24)); // 8
```

<br>

### 최소 공배수 (Least Common Multiple)

<br>

> lcm = (num1\*num2) / gcd

> num1 _ num2 = gcd _ lcm

> lcm = gcd _ (num1/gcd) _ (num2/gcd)

> lcm = gcd * (num1*num2/gcd)

```js
function solution(num1, num2, gcd) {
  return (num1 * num2) / gcd;
}

console.log(solution(16, 24, 8)); // 48
```

<br>

### 유클리드 호제법 정리

```js
function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}

console.log(solution(3, 12)); // [3,12]
console.log(solution(2, 5)); // [1,10]
```

<br>

## 참고

- https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0
