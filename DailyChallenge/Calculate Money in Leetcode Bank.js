const totalMoney = (n) => {
  let roundCount = 0;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += (i % 7 === 0 ? 7 : i % 7) + roundCount;
    if (i % 7 === 0) {
      roundCount++;
    }
  }
  return result;
};

console.log(totalMoney(14));
