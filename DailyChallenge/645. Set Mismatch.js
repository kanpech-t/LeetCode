/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);

  let prevNumber = 0;
  let duplicateNumber = 0;
  let missingNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    if (prevNumber === nums[i]) {
      duplicateNumber = nums[i];
    }
    if (nums[i] - prevNumber > 1) {
      missingNumber = nums[i] - 1;
    }
    prevNumber = nums[i];
  }

  return [
    duplicateNumber,
    nums[nums.length - 1] !== nums.length ? nums.length : missingNumber,
  ];
};

console.log(findErrorNums([1, 4, 2, 2]));
