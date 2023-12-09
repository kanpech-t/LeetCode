const compactObject = function (obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter((item) => item).map(compactObject);
  if (typeof obj !== "object") return obj;

  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (value) compacted[key] = value;
  }

  return compacted;
};

const arrayRemove = (item) => {};

console.log(compactObject([1, 2, 3, 0, false, [0]]));
console.log(compactObject({ a: null, b: [false, 1] }));
