const promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const resultArray = [];
    let count = 0;
    functions.forEach((element, index) => {
      element()
        .then((result) => {
          count++;
          resultArray[index] = result;
          if (count === functions.length) {
            resolve(resultArray);
          }
        })
        .catch((err) => reject(err));
    });
  });
};
