const transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (result[j]) {
        result[j].push(matrix[i][j]);
      } else {
        result[j] = [matrix[i][j]];
      }
    }
  }
  return result;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
