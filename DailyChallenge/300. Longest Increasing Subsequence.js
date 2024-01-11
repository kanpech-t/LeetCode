/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  //   const dict = {};
  //   const helper = (index, prevValue, sum) => {
  //     if (dict[index]) {
  //       return dict[index];
  //     }
  //     let currentSum = 0;
  //     if (index === nums.length) {
  //       console.log(sum);
  //       return sum;
  //     }
  //     if (prevValue < nums[index]) {
  //       currentSum = Math.max(
  //         helper(index + 1, nums[index], sum + 1),
  //         helper(index + 1, prevValue, sum)
  //       );
  //     } else {
  //       currentSum = helper(index + 1, prevValue, sum);
  //     }
  //     return currentSum;
  //   };
  //   return helper(0, -100001, 0);

  if (!nums || nums.length === 0) {
    return 0;
  }

  const db = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        db[i] = Math.max(db[j] + 1, db[i]);
      }
    }
  }
  return Math.max(...db);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
