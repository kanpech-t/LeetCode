const largestOddNumber = (num) => {
  let odd = false;
  const result = [];
  const numString = num
    .split("")
    .reverse()
    .forEach((element) => {
      Number(element);
      if (element % 2) {
        odd = true;
      }
      if (odd) {
        result.push(element);
      }
    });

  return result.reverse().join("");
};

largestOddNumber("52");
