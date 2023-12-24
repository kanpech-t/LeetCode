function minOperations(s: string): number {
  let firstFormatValue = 0;
  let secondFormatValue = 0;
  const length = s.length;
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      "0" === s[i] ? firstFormatValue++ : secondFormatValue++;
    } else {
      "1" === s[i] ? firstFormatValue++ : secondFormatValue++;
    }
  }

  return Math.min(length - firstFormatValue, length - secondFormatValue);
}

console.log(minOperations("0100"));
