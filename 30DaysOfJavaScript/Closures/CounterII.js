const createCounter = (init) => {
  let value = init;
  return {
    increment: () => {
      return (value += 1);
    },
    reset: () => {
      value = init;
      return init;
    },
    decrement: () => {
      return (value -= 1);
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
