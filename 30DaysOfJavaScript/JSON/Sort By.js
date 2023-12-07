const sortBy = (arr, fn) => {
  return arr.sort((a, b) => fn(a) - fn(b));
};

arr = [5, 4, 1, 2, 3];
fn = (x) => x;

console.log(sortBy(arr, fn));
