function maxWidthOfVerticalArea(points: number[][]): number {
  const sortArray = points.sort((a, b) => a[0] - b[0]);
  let result = 0;
  for (let i = 0; i < sortArray.length - 1; i++) {
    const width = sortArray[i + 1][0] - sortArray[i][0];
    if (width > result) {
      result = width;
    }
  }
  return result;
}

console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
);
