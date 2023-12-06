const cancellable = function (fn, args, t) {
  fn(...args);
  const timeLoop = setInterval(() => {
    fn(...args);
  }, t);
  return () => {
    clearInterval(timeLoop);
  };
};
