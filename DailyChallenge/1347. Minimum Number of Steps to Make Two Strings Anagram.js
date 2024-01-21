/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const mapS = {};
  const mapT = {};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      mapS[s[i]] = mapS[s[i]] ? mapS[s[i]] + 1 : 1;
      mapT[t[i]] = mapT[t[i]] ? mapT[t[i]] + 1 : 1;
    }
  }

  Object.entries(mapS).forEach(([key, value]) => {
    if (!mapT[key]) {
      result += value;
    } else {
      result += Math.max(0, value - mapT[key]);
    }
  });
  return result;
};

console.log(minSteps("leetcode", "practice"));
