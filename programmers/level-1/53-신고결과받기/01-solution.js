function solution(id_list, report, k) {
  let reportList = {};
  let countReport = {};

  for (id of id_list) {
    reportList[id] = [];
    countReport[id] = 0;
  }

  for (let r of report) {
    let [id, reportedId] = r.split(" ");
    if (!reportList[id].includes(reportedId)) {
      reportList[id].push(reportedId);
      countReport[reportedId]++;
    }
  }

  let answer = [];
  for (let id of id_list) {
    answer.push(
      reportList[id].filter((reportedId) => countReport[reportedId] >= k).length
    );
  }
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); //[2,1,1,0]
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); //[0,0]
