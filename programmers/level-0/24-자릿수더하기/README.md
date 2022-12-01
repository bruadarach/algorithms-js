## 문제 설명 [(link)](https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript)

정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

<br>

## 제한사항

0 ≤ n ≤ 1,000,000

<br>

## 입출력 예

| n      | result |
| ------ | ------ |
| 1234   | 10     |
| 930211 | 16     |

<br>

## 입출력 예 설명

<br>

## 입출력 예 #1

> 1 + 2 + 3 + 4 = 10을 return합니다.

<br>

# 입출력 예 #2

> 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

<br>

## 노트

`toString()` vs. `String()`

- value.toString() will cause an error if value is null or undefined.
- String(value) should not.

```js
null.toString(); //  Uncaught TypeError: Cannot read properties of null (reading 'toString')
undefined.toString(); //  Uncaught TypeError: Cannot read properties of null (reading 'toString')
```

```js
String(null); // 'null'
String(undeinfed); // 'undefined'
```
