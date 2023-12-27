function minCost(colors: string, neededTime: number[]): number {
  //   const helper = (currentIndex: number, sum: number): number => {
  //     if (currentIndex >= neededTime.length) {
  //       return sum;
  //     }
  //     let removeBallon = Number.MAX_VALUE;
  //     let keepBallonRemoveNext = Number.MAX_VALUE;
  //     let keepBallon = Number.MAX_VALUE;

  //     if (colors[currentIndex] !== colors[currentIndex + 1]) {
  //       keepBallon = helper(currentIndex + 1, sum);
  //     }

  //     if (colors[currentIndex] === colors[currentIndex + 1]) {
  //       removeBallon = helper(currentIndex + 1, sum + neededTime[currentIndex]);
  //       keepBallonRemoveNext = helper(
  //         currentIndex + 2,
  //         sum + neededTime[currentIndex + 1]
  //       );
  //     }

  //     return Math.min(removeBallon, keepBallon, keepBallonRemoveNext);
  //   };

  //   return helper(0, 0);

  const helper = (
    currentIndex: number,
    maxValue: number,
    totalSumRepeat: number,
    sum: number
  ): number => {
    if (currentIndex === colors.length) return sum;

    if (colors[currentIndex] === colors[currentIndex + 1]) {
      return helper(
        currentIndex + 1,
        Math.max(maxValue, neededTime[currentIndex]),
        totalSumRepeat + neededTime[currentIndex],
        sum
      );
    } else {
      return helper(
        currentIndex + 1,
        0,
        0,
        sum +
          totalSumRepeat +
          neededTime[currentIndex] -
          Math.max(maxValue, neededTime[currentIndex])
      );
    }
  };

  return helper(0, 0, 0, 0);
}

console.log(minCost("bbbaaa", [4, 9, 3, 8, 8, 9]));
