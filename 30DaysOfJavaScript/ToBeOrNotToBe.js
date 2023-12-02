const expect = (val) => {
  this.toBe = (item) => {
    if (item === val) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };
  this.notToBe = (item) => {
    if (item !== val) {
      return true;
    } else {
      throw new Error("Equal");
    }
  };

  return this;
};
