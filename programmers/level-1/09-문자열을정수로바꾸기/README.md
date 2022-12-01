## 문제 설명 [(link)](https://school.programmers.co.kr/learn/courses/30/lessons/12925?language=javascript)

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

<br>

## 제한 조건

- s의 길이는 1 이상 5이하입니다.
- s의 맨앞에는 부호(+, -)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.

<br>

## 입출력 예

예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.

str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

<br>

## 노트

`Number()` vs. `parseInt()`

- 문자열 => 숫자 변환

- 1. 인자가 `숫자 문자열`인 경우 => 정수

```js
Number(`000001`); // 1
parseInt(`000001`); // 1
```

- 2. 인자가 `숫자 문자열`인 경우 => 소수

```js
Number(`199.99`); // 199.99
parseInt(`199.99`); // 199
parseFloat(`199.99`); // 199.99
```

- 3. 인자가 `숫자+문자 열자열`인 경우 => 숫자로 시작

```js
Number(`2022년`); // NaN
parseInt(`2022년`); // 2022
```

- 4. 인자가 `숫자+문자 열자열`인 경우 => 문자로 시작

```js
Number(`챕터1`); // NaN
parseInt(`챕터1`); // NaN
```

- 5. 보충

  - `Number()` constructor called as a function performs type conversion
  - `parseInt()` performs parsing

```js
// type conversion
Number("20px"); // NaN
Number("2e1"); // 20, exponential notation

// parsing:
parseInt("20px"); // 20
parseInt("10100", 2); // 20
parseInt("2e1"); // 2
```

- 참고
  - https://velog.io/@blackwidow/parseInt%EC%99%80-Number%EC%9D%98-%EC%B0%A8%EC%9D%B4
  - https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number
