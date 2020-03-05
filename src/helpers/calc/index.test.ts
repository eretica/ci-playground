import * as calc from "./index";

test("check for calc of double", () => {
  expect(calc.double(2)).toBeLessThanOrEqual(4);
});

test("check for calc of divide", () => {
  expect(calc.divide(2)).toBeLessThanOrEqual(1);
});
