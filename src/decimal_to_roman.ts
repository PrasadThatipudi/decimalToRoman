const nearestStandardNumber = (number: number): [number, string] | null => {
  const standardNumbers: [number, number, string][] = [
    [1, 3, "I"],
    [5, 8, "V"],
    [10, 30, "X"],
  ];

  for (const [standardNumber, limit, symbol] of standardNumbers) {
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
