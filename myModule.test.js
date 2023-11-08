const { add, sub } = require("./myModule");

// Jest provides various functions for writing test cases. In the example above, we used test() and expect().

// test(description, testFunction): Defines a test case with a description and a function that contains the actual test code.

// expect(value): Used to make assertions about the value being tested. You can chain various matchers on expect to check if the value meets your expectations (e.g., toBe, toEqual, not.toBe, toBeTruthy, toBeFalsy, etc.).

// You can write multiple test cases in a single test file to cover different scenarios for your code.

test("add two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract two numbers", () => {
  expect(sub(3, 2)).toBe(1);
});
