/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const lost = [];
  const win = [];

  const result1 = [];
  const result2 = [];

  matches.forEach((match) => {
    lost[match[1]] = lost[match[1]] ? lost[match[1]] + 1 : 1;
    win[match[0]] = win[match[0]] ? win[match[0]] + 1 : 1;
  });

  for (let i = 1; i < Math.max(win.length, lost.length); i++) {
    if (lost[i] === 1) {
      result2.push(i);
    } else if (!lost[i] && win[i]) {
      result1.push(i);
    }
  }

  return [result1, result2];
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
