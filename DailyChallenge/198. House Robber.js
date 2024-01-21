/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const db = new Array(nums.length).fill("nodata");
  const helper = (index) => {
    if (index >= nums.length) {
      return 0;
    }
    if (db[index] !== "nodata") return db[index];

    // didn't rob this house
    const next = helper(index + 1);

    // rob this house cant rob next house
    const take = helper(index + 2) + nums[index];

    db[index] = Math.max(next, take);
    return Math.max(next, take);
  };
  return helper(0);
};

console.log(rob([2, 7, 9, 3, 1]));
