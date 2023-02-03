## 문제 설명 [(link)](https://school.programmers.co.kr/learn/courses/30/lessons/120885?language=javascript)

이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

<br>

## 제한사항

- return 값은 이진수를 의미하는 문자열입니다.
- 1 ≤ bin1, bin2의 길이 ≤ 10
- bin1과 bin2는 0과 1로만 이루어져 있습니다.
- bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

<br>

## 입출력 예

| bin1   | bin2   | result  |
| ------ | ------ | ------- |
| "10"   | "11"   | "101"   |
| "1001" | "1111" | "11000" |

<br>

## 입출력 예 설명

<br>

### 입출력 예 #1

> 10 + 11 = 101 이므로 "101" 을 return합니다.

<br>

### 입출력 예 #2

> 1001 + 1111 = 11000 이므로 "11000"을 return합니다.

<br>

## Note

- 2진수 → 10진수: `parseInt()` 사용

```js
const str = "10";
console.log(parseInt(str)); //10 (str을 정수로)
console.log(parseInt(str, 2)); //2 (2진수인 str을 10진수로)
```

- 10진수 → 2진수: `toString()` 사용

```js
const num = 10;
console.log(num.toString()); //"10" (num을 문자열로)
console.log(num.toString(2)); //"1010" (num을 2진수로)
```
