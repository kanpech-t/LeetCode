function destCity(paths: string[][]): string {
  const dict: { [key: string]: string } = paths.reduce((result, current) => {
    result[current[0]] = current[1];
    return result;
  }, {} as { [key: string]: string });

  const travel = (town: string): string => {
    return dict[town] ? travel(dict[town]) : town;
  };

  return travel(paths[0][0]);
}
console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
