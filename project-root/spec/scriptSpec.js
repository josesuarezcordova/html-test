const { add } = require("../script");

describe("A simple test", function() {
  it("should add numbers correctly", function() {
    expect(1 + 2).toBe(3);
  });
});

describe("add function", function() {
  it("should return sum of two numbers", function() {
    expect(add(2, 3)).toBe(5);
  });
});