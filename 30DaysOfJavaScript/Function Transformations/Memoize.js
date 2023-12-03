function memoize(fn) {
  let memoArgs = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in memoArgs) {
      return memoArgs[key];
    } else {
      const ans = fn(...args);
      memoArgs[key] = ans;

      return ans;
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(0, 0)); // 5
memoizedFn(0, 0); // 5
console.log(callCount); // 1
