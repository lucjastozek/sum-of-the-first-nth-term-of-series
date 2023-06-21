import seriesSum from "./skeleton";

test("basic tests", () => {
  expect(seriesSum(1)).toBe("1.00");
  expect(seriesSum(2)).toBe("1.25");
  expect(seriesSum(5)).toBe("1.57");
});
