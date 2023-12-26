function numRollsToTarget(n: number, k: number, target: number): number {
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));
  const mod = Math.pow(10, 9) + 7;
  const helper = (currentDice: number, sum: number): number => {
    let result = 0;
    if (currentDice === 0 && sum === target) {
      return 1;
    } else if (currentDice === 0) {
      return 0;
    }

    if (dp[currentDice][sum] !== -1) return dp[currentDice][sum] % mod;

    for (let i = 1; i <= k; i++) {
      if (sum + i <= target) result += helper(currentDice - 1, sum + i);
    }

    dp[currentDice][sum] = result % mod;

    return result % mod;
  };

  return helper(n, 0);
}

console.log(numRollsToTarget(30, 30, 500));
