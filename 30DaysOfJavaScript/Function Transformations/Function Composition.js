const compose = (fn) => {
  return function (x) {
    return fn.reverse().reduce((result, current) => {
      result = current(result);
      return result;
    }, x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);

console.log(fn(4));
