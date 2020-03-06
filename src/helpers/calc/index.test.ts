import * as calc from "./index";

test("check for calc of double", () => {
  expect(calc.double(2)).toEqual(4);
});

test("check for calc of divide", () => {
  expect(calc.divide(2)).toEqual(1);
});

test("check for calc of plusOne", () => {
  expect(calc.plusOne(10)).toEqual(11);
});

test("check for calc of minus", () => {
  expect(calc.minus(1)).toEqual(0);
});
