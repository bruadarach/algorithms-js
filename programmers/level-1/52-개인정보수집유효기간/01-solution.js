function solution(today, terms, privacies) {
  let answer = [];
  let [todayYear, todayMonth, todayDay] = today.split(".").map((el) => +el);

  let terms_code = [];
  let terms_num = [];
  terms.forEach((el) => {
    let [code, num] = el.split(" ");
    terms_code.push(code);
    terms_num.push(+num);
  });

  privacies.forEach((el, idx) => {
    let [date, term] = el.split(" ");
    let [expiredYear, expiredMonth, expiredDay] = date
      .split(".")
      .map((el) => +el);
    let expiredTerm = terms_num[terms_code.indexOf(term)];

    expiredMonth += expiredTerm;
    expiredDay--;

    if (expiredDay === 0) {
      expiredDay = 28;
      expiredMonth--;
    }

    if (expiredMonth > 12) {
      expiredYear += Math.floor(expiredMonth / 12);
      expiredMonth = expiredMonth % 12;
    }

    // if expiredMonth % 12 was 0 (12, 24, 36, ...) and reflected to expiredYear
    // if the month was decreased from 1(January) to 0
    if (expiredMonth == 0) {
      expiredMonth = 12;
      expiredYear--;
    }

    if (todayYear > expiredYear) {
      answer.push(idx + 1);
    } else if (todayYear === expiredYear) {
      if (todayMonth > expiredMonth) {
        answer.push(idx + 1);
      } else if (todayMonth === expiredMonth) {
        if (todayDay > expiredDay) {
          answer.push(idx + 1);
        }
      }
    }

    // if (
    //   todayYear > expiredYear ||
    //   (todayYear === expiredYear &&
    //     (todayMonth > expiredMonth ||
    //       (todayMonth === expiredMonth && todayDay > expiredDay)))
    // ) {
    //   answer.push(idx + 1);
    // }
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); //	[1, 3]
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); //	[1, 4, 5]

console.log(solution("2021.12.08", ["A 6"], ["2020.06.08 A"])); //	[1]
console.log(solution("2021.12.08", ["A 18"], ["2020.06.08 A"])); //	[1]
