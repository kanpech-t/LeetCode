const join = function (arr1, arr2) {
  const result = {};
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }

  arr2.forEach((element) => {
    if (result[element.id]) {
      Object.entries(element).forEach(([key, value]) => {
        result[element.id][key] = element[key];
      });
    } else {
      result[element.id] = element;
    }
  });
  return Object.values(result);
};
