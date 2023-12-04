const largestGoodInteger = (num) => {
  const numArray = num.split("");
  let value = -1;
  let result = "";
  if (numArray.length < 3) {
    return "";
  } else {
    for (let i = 0; i < numArray.length - 2; i++) {
      if (
        numArray[i] === numArray[i + 1] &&
        numArray[i + 1] === numArray[i + 2]
      ) {
        if (Number(numArray[i]) > value) {
          value = Number(numArray[i]);
          result = numArray[i].repeat(3);
        }
      }
    }
  }
  return result;
};

console.log(largestGoodInteger("6777133339"));
