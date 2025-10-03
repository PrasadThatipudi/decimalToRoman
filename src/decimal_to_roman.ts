const nearestStandardNumber = (number: number): [number, string] => {
  const standardNumbers: [number, string, number][] = [
    [1, "I", 3],
    [5, "V", 8],
    [10, "X", 39],
    [50, "L", 89],
    [100, "C", 399],
    [500, "D", 899],
    [1000, "M", Infinity],
  ];

  return standardNumbers
    .find(([, , maxRange]) => number <= maxRange)!
    .slice(0, 2) as [number, string];
};

const decimalToRoman = (decimalNumber: number): string => {
  if (decimalNumber <= 0) throw new Error("Invalid Number");

  const [standardNumber, symbol] = nearestStandardNumber(decimalNumber);

  if (decimalNumber === standardNumber) return symbol;

  if (decimalNumber < standardNumber)
    return decimalToRoman(standardNumber - decimalNumber) + symbol;

  return symbol + decimalToRoman(decimalNumber - standardNumber);
};

export { decimalToRoman };
