function solution(id_list, report, k) {
  let answer = [];
  let reportCount = {};
  let reportList = {};
  let reportResult = {};

  for (let id of id_list) {
    reportCount[id] = 0;
    reportList[id] = [];
    reportResult[id] = 0;
  }

  for (let r of report) {
    let [id, reportedId] = r.split(" ");
    if (!reportList[reportedId].includes(id)) {
      reportList[reportedId].push(id);
      reportCount[reportedId]++;
    }
  }

  for (let id of id_list) {
    if (reportCount[id] >= k) {
      for (let reporter of reportList[id]) {
        reportResult[reporter]++;
      }
    }
  }

  for (let id of id_list) {
    answer.push(reportResult[id]);
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
