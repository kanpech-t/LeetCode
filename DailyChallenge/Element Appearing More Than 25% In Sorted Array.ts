function findSpecialInteger(arr: number[]): number {
  const arrLength = arr.length;
  let count = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] !== arr[i - 1]) {
      count = 1;
    } else {
      count++;
    }

    if (count > arrLength / 4) {
      return arr[i];
    }
  }
  return -1;
}

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
