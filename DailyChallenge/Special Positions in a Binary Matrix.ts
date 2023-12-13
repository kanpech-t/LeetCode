function numSpecial(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  let result = 0;

  const row: { [key: number]: number } = {};
  const col: { [key: number]: number } = {};

  for (let i = 0; i < m; i++) {
    row[i] = mat[i].reduce((result, current) => result + current, 0);
  }

  for (let i = 0; i < n; i++) {
    col[i] = 0;
    for (let j = 0; j < m; j++) {
      col[i] += mat[j][i];
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] === 1 && col[j] === 1 && mat[i][j] === 1) {
        result++;
      }
    }
  }

  return result;
}

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
