const addTwoPromises = async (promise1, promise2) => {
  const [resultPromise1, resultPromise2] = await Promise.all([
    promise1,
    promise2,
  ]);
  return resultPromise1 + resultPromise2;
};
