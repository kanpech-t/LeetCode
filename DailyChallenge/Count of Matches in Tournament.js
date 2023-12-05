const numberOfMatches = (n) => {
  let result = 0;
  while (n > 1) {
    n % 2 === 0 ? (result += n / 2) : (result += (n - 1) / 2);
    n = Math.ceil(n / 2);
  }
  return result;
};

console.log(numberOfMatches(14));
