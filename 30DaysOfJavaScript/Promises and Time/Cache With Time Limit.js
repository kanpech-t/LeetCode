const TimeLimitedCache = function () {
  this.dict = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const exist = this.dict[key];
  if (exist) {
    clearTimeout(this.dict[key].timeId);
  }
  let timeId = setTimeout(() => {
    this.dict[key] = { ...this.dict[key], expired: true };
  }, duration);
  this.dict[key] = { expired: false, value: value, timeId: timeId };
  return exist ? true : false;
};

TimeLimitedCache.prototype.get = function (key) {
  if (!this.dict[key] || this.dict[key].expired) {
    return -1;
  }

  return this.dict[key].value;
};

TimeLimitedCache.prototype.count = function () {
  return Object.entries(this.dict).reduce((result, current) => {
    if (!current[1].expired) {
      result++;
    }
    return result;
  }, 0);
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.count());
