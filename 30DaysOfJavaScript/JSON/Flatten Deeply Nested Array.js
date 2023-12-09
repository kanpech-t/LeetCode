const flat = (arr, n) => {
  const res = [];
  arr.forEach((element) => {
    travel(element, n, 0, res);
  });
  return res;
};

const travel = (arr, n, deep, res) => {
  if (n <= deep || !Array.isArray(arr)) {
    res.push(arr);
  } else {
    arr.forEach((item) => travel(item, n, deep + 1, res));
  }
};

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 2;

console.log(flat(arr, n));
