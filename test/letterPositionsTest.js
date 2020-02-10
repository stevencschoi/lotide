const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

const input1 = "hello";
const result1 = { h:[ 0 ], e:[ 1 ], l:[ 2, 3 ], o:[ 4 ] };

describe("#letterPositions", () => {
  it("should return result1 from input1", () => {
    assert.deepEqual(letterPositions(input1),result1);
  });
});