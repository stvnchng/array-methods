const mergeIntervals = (intervals) => {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (const i of intervals) {
    if (res.length > 0 && i[0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], i[1]);
    } else {
      res.push(i);
    }
  }
  return res;
};

console.log(
  mergeIntervals([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ])
);
