const minTimeToVisitAllPoints = (points) => {
  let position = points[0];
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    let xAxis = Math.abs(position[0] - points[i][0]);
    let yAxis = Math.abs(position[1] - points[i][1]);
    result += Math.max(xAxis, yAxis);
    position = points[i];
  }
  return result;
};

points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

console.log(minTimeToVisitAllPoints(points));
