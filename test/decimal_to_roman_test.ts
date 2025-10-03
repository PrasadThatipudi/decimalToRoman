import { decimalToRoman } from "../src/decimal_to_roman.ts";
import { assertEquals, assertThrows } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

describe("Exception cases", () => {
  it("number is 0 | should throw 'Invalid Number'", () => {
    assertThrows(() => decimalToRoman(0), "Invalid Number");
  });

  it("number is negative | should throw 'Invalid Number'", () => {
    assertThrows(() => decimalToRoman(-1), "Invalid Number");
  });
});

describe("1-10", () => {
  it("number is 1 | result should be 'I'", () => {
    assertEquals(decimalToRoman(1), "I");
  });

  it("number is 2 | result should be 'II'", () => {
    assertEquals(decimalToRoman(2), "II");
  });

  it("number is 3 | result should be 'III'", () => {
    assertEquals(decimalToRoman(3), "III");
  });

  it("number is 4 | result should be 'IV'", () => {
    assertEquals(decimalToRoman(4), "IV");
  });

  it("number is 5 | result should be 'V'", () => {
    assertEquals(decimalToRoman(5), "V");
  });

  it("number is 6 | result should be 'VI'", () => {
    assertEquals(decimalToRoman(6), "VI");
  });

  it("number is 7 | result should be 'VII'", () => {
    assertEquals(decimalToRoman(7), "VII");
  });

  it("number is 8 | result should be 'VIII'", () => {
    assertEquals(decimalToRoman(8), "VIII");
  });

  it("number is 9 | result should be 'IX'", () => {
    assertEquals(decimalToRoman(9), "IX");
  });

  it("number is 10 | result should be 'X'", () => {
    assertEquals(decimalToRoman(10), "X");
  });
});

describe("11-20", () => {
  it("number is 11 | result should be 'XI'", () => {
    assertEquals(decimalToRoman(11), "XI");
  });

  it("number is 12 | result should be 'XII'", () => {
    assertEquals(decimalToRoman(12), "XII");
  });

  it("number is 13 | result should be 'XIII'", () => {
    assertEquals(decimalToRoman(13), "XIII");
  });

  it("number is 14 | result should be 'XIV'", () => {
    assertEquals(decimalToRoman(14), "XIV");
  });

  it("number is 15 | result should be 'XV'", () => {
    assertEquals(decimalToRoman(15), "XV");
  });

  it("number is 16 | result should be 'XVI'", () => {
    assertEquals(decimalToRoman(16), "XVI");
  });

  it("number is 17 | result should be 'XVII'", () => {
    assertEquals(decimalToRoman(17), "XVII");
  });

  it("number is 18 | result should be 'XVIII'", () => {
    assertEquals(decimalToRoman(18), "XVIII");
  });

  it("number is 19 | result should be 'XIX'", () => {
    assertEquals(decimalToRoman(19), "XIX");
  });

  it("number is 20 | result should be 'XX'", () => {
    assertEquals(decimalToRoman(20), "XX");
  });
});

describe("21-30", () => {
  it("number is 21 | result should be 'XXI'", () => {
    assertEquals(decimalToRoman(21), "XXI");
  });

  it("number is 22 | result should be 'XXII'", () => {
    assertEquals(decimalToRoman(22), "XXII");
  });

  it("number is 23 | result should be 'XXIII'", () => {
    assertEquals(decimalToRoman(23), "XXIII");
  });

  it("number is 24 | result should be 'XXIV'", () => {
    assertEquals(decimalToRoman(24), "XXIV");
  });

  it("number is 25 | result should be 'XXV'", () => {
    assertEquals(decimalToRoman(25), "XXV");
  });

  it("number is 26 | result should be 'XXVI'", () => {
    assertEquals(decimalToRoman(26), "XXVI");
  });

  it("number is 27 | result should be 'XXVII'", () => {
    assertEquals(decimalToRoman(27), "XXVII");
  });

  it("number is 28 | result should be 'XXVIII'", () => {
    assertEquals(decimalToRoman(28), "XXVIII");
  });

  it("number is 29 | result should be 'XXIX'", () => {
    assertEquals(decimalToRoman(29), "XXIX");
  });

  it("number is 30 | result should be 'XXX'", () => {
    assertEquals(decimalToRoman(30), "XXX");
  });
});

describe("31-39", () => {
  it("number is 31 | result should be 'XXXI'", () => {
    assertEquals(decimalToRoman(31), "XXXI");
  });

  it("number is 32 | result should be 'XXXII'", () => {
    assertEquals(decimalToRoman(32), "XXXII");
  });

  it("number is 33 | result should be 'XXXIII'", () => {
    assertEquals(decimalToRoman(33), "XXXIII");
  });

  it("number is 34 | result should be 'XXXIV'", () => {
    assertEquals(decimalToRoman(34), "XXXIV");
  });

  it("number is 35 | result should be 'XXXV'", () => {
    assertEquals(decimalToRoman(35), "XXXV");
  });

  it("number is 36 | result should be 'XXXVI'", () => {
    assertEquals(decimalToRoman(36), "XXXVI");
  });

  it("number is 37 | result should be 'XXXVII'", () => {
    assertEquals(decimalToRoman(37), "XXXVII");
  });

  it("number is 38 | result should be 'XXXVIII'", () => {
    assertEquals(decimalToRoman(38), "XXXVIII");
  });

  it("number is 39 | result should be 'XXXIX'", () => {
    assertEquals(decimalToRoman(39), "XXXIX");
  });
});

describe("Standard Notation", () => {
  it("number is 50 | result should be 'L'", () => {
    assertEquals(decimalToRoman(50), "L");
  });

  it("number is 100 | result should be 'C'", () => {
    assertEquals(decimalToRoman(100), "C");
  });

  it("number is 500 | result should be 'D'", () => {
    assertEquals(decimalToRoman(500), "D");
  });

  it("number is 1000 | result should be 'M'", () => {
    assertEquals(decimalToRoman(1000), "M");
  });
});

describe("Subtractive Notation", () => {
  it("number is 40 | result should be 'XL'", () => {
    assertEquals(decimalToRoman(40), "XL");
  });

  it("number is 90 | result should be 'XC'", () => {
    assertEquals(decimalToRoman(90), "XC");
  });

  it("number is 400 | result should be 'CD'", () => {
    assertEquals(decimalToRoman(400), "CD");
  });

  it("number is 900 | result should be 'CM'", () => {
    assertEquals(decimalToRoman(900), "CM");
  });
});
