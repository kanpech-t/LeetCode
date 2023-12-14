function onesMinusZeros(grid: number[][]): number[][] {
  const result: number[][] = [];
  const m = grid.length;
  const n = grid[0].length;
  const col: number[] = new Array(n).fill(0);
  const row: number[] = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    result.push([]);

    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        col[j]++;
        row[i]++;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i].push(2 * col[j] + 2 * row[i] - m - n);
    }
  }

  return result;
}

console.log(
  onesMinusZeros([
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
  ])
);
