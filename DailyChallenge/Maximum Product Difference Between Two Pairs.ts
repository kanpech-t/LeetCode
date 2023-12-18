function maxProductDifference(nums: number[]): number {
  let maxValue = [0, 0];
  let minValue = [100000, 100000];

  nums.forEach((current) => {
    if (current >= maxValue[1]) {
      maxValue[0] = maxValue[1];
      maxValue[1] = current;
    } else if (current > maxValue[0]) {
      maxValue[0] = current;
    }

    if (current <= minValue[1]) {
      minValue[0] = minValue[1];
      minValue[1] = current;
    } else if (current < minValue[0]) {
      minValue[0] = current;
    }
  });

  return maxValue[0] * maxValue[1] - minValue[0] * minValue[1];
}

console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
