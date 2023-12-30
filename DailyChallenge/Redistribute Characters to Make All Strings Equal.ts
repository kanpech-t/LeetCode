function makeEqual(words: string[]): boolean {
  let result = true;
  const dict: { [key: string]: number } = {};
  const length = words.length;
  const longWord = words.join("");

  for (let i = 0; i < longWord.length; i++) {
    if (!dict[longWord[i]]) {
      dict[longWord[i]] = 1;
      if (dict[longWord[i]] % length === 0) {
        dict[longWord[i]] = 0;
      }
    } else {
      dict[longWord[i]]++;
      if (dict[longWord[i]] % length === 0) {
        dict[longWord[i]] = 0;
      }
    }
  }
  Object.entries(dict).forEach((item) => {
    if (item[1] !== 0) result = false;
  });
  return result;
}

console.log(makeEqual(["b"]));
