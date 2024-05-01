const reversePrefix = function (word, ch) {
  const indexOfCh = word.indexOf(ch);
  const firstHalf = word
    .slice(0, indexOfCh + 1)
    .split("")
    .reverse()
    .join("");
  const secondHalf = word.slice(indexOfCh + 1, word.length);
  return firstHalf + secondHalf;
};

console.log(reversePrefix("abcdefd", "d"));
