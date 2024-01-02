/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = (nums) => {
  const result = [[]];

  nums.forEach((item) => {
    let resultIndex = 0;

    while (result[resultIndex] && result[resultIndex].includes(item)) {
      resultIndex++;
    }
    if (!result[resultIndex]) {
      result[resultIndex] = [item];
    } else if (!result[resultIndex].includes(item)) {
      result[resultIndex].push(item);
    }
  });
  return result;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
