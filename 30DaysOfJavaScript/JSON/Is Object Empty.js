const isEmpty = (obj) => {
  const json = JSON.stringify(obj);
  return json === "{}" || json === "[]";
};

isEmpty({});
