/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I"];
  const firstHalf = s
    .split("")
    .slice(0, Math.floor(s.length / 2))
    .reduce((result, current) => {
      if (vowel.includes(current)) {
        result++;
      }
      return result;
    }, 0);
  const secondHalf = s
    .split("")
    .slice(Math.ceil(s.length / 2))
    .reduce((result, current) => {
      if (vowel.includes(current)) {
        result++;
      }
      return result;
    }, 0);

  return secondHalf === firstHalf;
};
