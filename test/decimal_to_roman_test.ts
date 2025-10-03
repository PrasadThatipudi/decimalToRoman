import { decimalToRoman } from "../src/decimal_to_roman.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

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

  // it("number is 10 | result should be 'X'", () => {
  //   assertEquals(decimalToRoman(10), "X");
  // });
});
