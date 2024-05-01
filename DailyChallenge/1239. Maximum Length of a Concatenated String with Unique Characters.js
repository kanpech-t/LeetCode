/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const helper = (index, currentIndex) => {
    if (index === arr.length) {
      return Object.keys(currentIndex).length;
    }
    let skipThis = false;
    let currentIndexClone = { ...currentIndex };

    arr[index].split("").forEach((item) => {
      if (currentIndexClone[item]) {
        skipThis = true;
      } else {
        currentIndexClone[item] = 1;
      }
    });
    let take = 0;
    let skip = 0;
    skip = helper(index + 1, currentIndex);
    if (!skipThis) {
      currentIndex = currentIndexClone;
      take = helper(index + 1, currentIndex);
    }

    return Math.max(take, skip);
  };

  return helper(0, {});
};

console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"]));
