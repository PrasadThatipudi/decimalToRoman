const nearestStandardNumber = (number: number): [number, string] | null => {
  const standardNumbers: [number, string][] = [
    [5, "V"],
    [1, "I"],
  ];

  for (const [standardNumber, symbol] of standardNumbers) {
    if (number >= standardNumber) return [standardNumber, symbol];
  }

  return null;
};

const decimalToRoman = (decimalNumber: number, acc = ""): string => {
  const standardNumberSet = nearestStandardNumber(decimalNumber);

  if (!standardNumberSet) throw "Invalid Number";

  const [standardNumber, symbol] = standardNumberSet;
  const remainingNumber = decimalNumber - standardNumber;

  if (remainingNumber <= 0) return acc + symbol;

  return decimalToRoman(remainingNumber, acc + symbol);
};

export { decimalToRoman };
