/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = (nums) => {
  let result = 0;
  const dict = new Map();

  nums.forEach((num) => {
    dict.set(num, (dict.get(num) || 0) + 1);
  });

  const arrayDict = Array.from(dict.entries());

  for (let i = 0; i < arrayDict.length; i++) {
    if (arrayDict[i][1] === 1) {
      return -1;
    }
    result += Math.ceil(arrayDict[i][1] / 3);
  }

  return result;
};

console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]));
