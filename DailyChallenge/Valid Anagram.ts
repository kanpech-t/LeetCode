function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const dict: { [key: string]: number } = s
    .split("")
    .reduce((result, current) => {
      result[current] = result[current] ? result[current] + 1 : 1;

      return result;
    }, {} as { [key: string]: number });

  return t.split("").reduce((result, current) => {
    if (!dict[current] || dict[current] === 0) {
      result = false;
    } else {
      dict[current]--;
    }

    return result;
  }, true);
}
console.log(isAnagram("rat", "car"));
