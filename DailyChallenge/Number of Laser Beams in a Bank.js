/**
 * @param {string[]} bank
 * @return {number}
 */

const numberOfBeams = (bank) => {
  let result = 0;
  let prevLaserBeam = 0;

  bank.forEach((row, index) => {
    const currentLaserInThisRow = row
      .split("")
      .filter((item) => item === "1").length;
    if (currentLaserInThisRow !== 0) {
      result += currentLaserInThisRow * prevLaserBeam;
      prevLaserBeam = currentLaserInThisRow;
    }
  });
  return result;
};

console.log(numberOfBeams(["000", "111", "000"]));
