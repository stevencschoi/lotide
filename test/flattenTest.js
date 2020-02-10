const assert = require("chai").assert;
const flatten = require("../flatten");

const input1 = [1, 2, [3, 4], 5, [6]];
const expectedOutput = [1, 2, 3, 4, 5, 6];

describe("#flatten", () => {
  it("should return a flattened array from a nested array", () => {
    assert.deepEqual(flatten(input1),expectedOutput);
  });
});