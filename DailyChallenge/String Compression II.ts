// function getLengthOfOptimalCompression(s: string, k: number): number {
//   const helper = (
//     currentIndex: number,
//     remandK: number,
//     totalLengthRepeat: number,
//     totalLength: number,
//     prevValue: string
//   ): number => {
//     console.log(currentIndex, " ", totalLength);
//     if (currentIndex >= s.length) {
//       return totalLength;
//     }

//     let resultRemoveThisIndex = Number.MAX_SAFE_INTEGER;
//     let resultKeepThisIndex = Number.MAX_SAFE_INTEGER;
//     let newLength = totalLengthRepeat;

//     if (remandK > 0) {
//       resultRemoveThisIndex = helper(
//         currentIndex + 1,
//         remandK - 1,
//         totalLengthRepeat,
//         totalLength,
//         prevValue
//       );
//     }

//     if (s[currentIndex] === prevValue) {
//       newLength++;
//       console.log("new", newLength);
//     } else {
//       newLength = 0;
//       if (totalLengthRepeat === 1) {
//         totalLength++;
//       } else {
//         totalLength += Math.floor(totalLengthRepeat / 10) + 2;
//       }
//     }

//     resultKeepThisIndex = helper(
//       currentIndex + 1,
//       remandK,
//       newLength,
//       totalLength,
//       s[currentIndex]
//     );

//     // console.log(resultKeepThisIndex, "  ", resultRemoveThisIndex);
//     return Math.min(resultKeepThisIndex, resultRemoveThisIndex);
//   };

//   return helper(0, k, 0, 0, "");
// }

// console.log(getLengthOfOptimalCompression("aaaaaaaaaaa", 0));

function getLengthOfOptimalCompression(s: string, k: number): number {
  const memo: any[][] = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: k + 1 }).fill(-1)
  );
  const helper = (
    currentIndex: number,
    remandK: number,
    totalLengthRepeat: number,
    totalLength: number,
    prevValue: string
  ): number => {
    let resultRemoveThisIndex = Number.MAX_SAFE_INTEGER;
    let resultKeepThisIndex = Number.MAX_SAFE_INTEGER;

    if (currentIndex >= s.length) {
      if (totalLengthRepeat > 1) {
        totalLength += totalLengthRepeat.toString().length + 1;
      } else if (totalLengthRepeat === 1) {
        totalLength++;
      }
      return totalLength;
    }

    if (memo[currentIndex][remandK] !== -1) {
      return memo[currentIndex][remandK];
    }

    if (remandK > 0) {
      resultRemoveThisIndex = helper(
        currentIndex + 1,
        remandK - 1,
        totalLengthRepeat,
        totalLength,
        prevValue
      );
    }
    if (s[currentIndex] === prevValue) {
      totalLengthRepeat++;
    } else {
      if (totalLengthRepeat > 1) {
        totalLength += totalLengthRepeat.toString().length + 1;
      } else if (totalLengthRepeat === 1) {
        totalLength++;
      }
      totalLengthRepeat = 1;
    }

    resultKeepThisIndex = helper(
      currentIndex + 1,
      remandK,
      totalLengthRepeat,
      totalLength,
      s[currentIndex]
    );

    memo[currentIndex][remandK] = Math.min(
      resultKeepThisIndex,
      resultRemoveThisIndex
    );
    return memo[currentIndex][remandK];
  };
  if (s.length <= k) return 0;

  return helper(0, k, 0, 0, "");
}

console.log(getLengthOfOptimalCompression("aaabcccd", 2));
