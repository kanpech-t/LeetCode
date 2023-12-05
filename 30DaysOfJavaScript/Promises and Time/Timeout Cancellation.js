const cancellable = (fn, args, t) => {
  const time = setTimeout(() => {
    console.log("done");
    fn(args);
  }, t);
  return () => {
    console.log("nope");
    clearTimeout(time);
  };
};
