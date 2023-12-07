Array.prototype.groupBy = function (fn) {
  const result = {};
  this.forEach((item) => {
    const ans = fn(item);
    if (result[ans]) {
      result[ans].push(item);
    } else {
      result[ans] = [item];
    }
  });
  return result;
};

console.log([1, 2, 3].groupBy(String));
