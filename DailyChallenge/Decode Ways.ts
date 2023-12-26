const numDecodings = (s: string): number => {
  const helper = (index: number): number => {
    if (index === s.length) {
      return 1;
    }

    if (s[index] === "0") {
      return  0;
    }

    let ways = helper(index + 1);
    console.log(ways);

    if (index < s.length - 1 && parseInt(s.substring(index, index + 2)) <= 26) {
      ways += helper(index + 2);
    }
    return ways;
  };

  return helper(0);
};
