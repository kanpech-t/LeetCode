function buyChoco(prices: number[], money: number): number {
  let min = 101;
  let secondMin = 101;
  prices.forEach((current) => {
    if (current <= min) {
      secondMin = min;
      min = current;
    } else if (current < secondMin) {
      secondMin = current;
    }
  });

  return min + secondMin > money ? money : money - (min + secondMin);
}
