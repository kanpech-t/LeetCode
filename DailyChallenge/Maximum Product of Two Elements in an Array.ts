function maxProduct(nums: number[]): number {
  const firstMax = Math.max(...nums);

  nums.splice(
    nums.findIndex((item) => item === firstMax),
    1
  );

  const secondMax = Math.max(...nums);

  return (secondMax - 1) * (firstMax - 1);
}

console.log(maxProduct([1, 2, 8, 4, 5, 6]));
