## 문제 설명 [(link)](https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript)

문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

<br>

## 제한사항

1 ≤ str1의 길이 ≤ 100
1 ≤ str2의 길이 ≤ 100

<br>

## 입출력 예

| str1                     | str2   | result |
| ------------------------ | ------ | ------ |
| "ab6CDE443fgh22iJKlmn1o" | "6CD"  | 1      |
| "ppprrrogrammers"        | "pppp" | 2      |

<br>

## 입출력 예 설명

<br>

### 입출력 예 #1

> "ab6CDE443fgh22iJKlmn1o" str1에 str2가 존재하므로 1을 return합니다.

<br>

### 입출력 예 #2

> "ppprrrogrammers" str1에 str2가 없으므로 2를 return합니다.

<br>

## 노트

`indexOf()` vs. `includes()`

- **indexOf** uses `Strict Equality Comparison` whereas **includes** uses the `SameValueZero algorithm`.

- Because of this reason, the following two points of differences arise, especially conceerning `NaN` and `undefined`.

```js
[NaN]
  .indexOf(NaN) // -1 (not found)
  [NaN].includes(NaN); // true
```

```js
[ , , ].indexOf(undefined) // -1 (not found)
[ , , ].includes(undefined) // true
```

- 참고: https://stackoverflow.com/questions/35370222/array-prototype-includes-vs-array-prototype-indexof
