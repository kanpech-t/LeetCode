/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = (startTime, endTime, profit) => {
  const dp = new Array(startTime.length).fill(-1);
  // sort array by startTime and map to obj
  const sortByStartTime = startTime
    .map((time, index) => {
      return {
        startTime: time,
        endTime: endTime[index],
        profit: profit[index],
      };
    })
    .sort((a, b) => a.startTime - b.startTime);

  const helper = (index, sumProfit) => {
    if (index >= startTime.length) return 0;
    if (dp[i] !== -1) return dp[i];
  };

  console.log(sortByStartTime);
};

console.log(jobScheduling([3, 2, 1, 3], [6, 4, 3, 5], [70, 10, 50, 40]));
