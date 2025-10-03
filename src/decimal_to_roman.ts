const nearestStandardNumber = (number: number): [number, string] | null => {
  const standardNumbers: [number, string, number][] = [
    [1, "I", 3],
    [5, "V", 8],
    [10, "X", 39],
    [50, "L", 89],
    [100, "C", 399],
    [500, "D", 899],
    [1000, "M", Infinity],
  ];

  for (const [standardNumber, symbol, limit] of standardNumbers) {
    if (number <= limit) return [standardNumber, symbol];
  }

  return null;
};

const decimalToRoman = (decimalNumber: number): string => {
  const standardNumberSet = nearestStandardNumber(decimalNumber);

  if (!standardNumberSet) throw "Invalid Number";

  const [standardNumber, symbol] = standardNumberSet;

  if (decimalNumber < standardNumber)
    return decimalToRoman(standardNumber - decimalNumber) + symbol;

  if (decimalNumber === standardNumber) return symbol;

  const remainingNumber = decimalNumber - standardNumber;

  return symbol + decimalToRoman(remainingNumber);
};

export { decimalToRoman };
