function isPathCrossing(path: string): boolean {
  const prevPoint: { [key: string]: number } = {};
  let x = 0;
  let y = 0;

  prevPoint["x0y0"] = 1;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") x++;
    else if (path[i] === "S") x--;
    else if (path[i] === "E") y++;
    else if (path[i] === "W") y--;
    if (prevPoint[`x${x}y${y}`]) {
      return true;
    }
    prevPoint[`x${x}y${y}`] = 1;
  }
  return false;
}

console.log(isPathCrossing("NESWW"));
