const countCharacters = (words, chars) => {
  let result = 0;
  const charsMap = chars.split("").reduce((map, char) => {
    map[char] = (map[char] || 0) + 1;
    return map;
  }, {});

  const isValidWord = (word) => {
    const wordMap = { ...charsMap };

    for (const char of word) {
      if (wordMap[char] > 0) {
        wordMap[char]--;
      } else {
        return false;
      }
    }

    return true;
  };

  words.forEach((word) => {
    if (isValidWord(word)) {
      result += word.length;
    }
  });

  return result;
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
