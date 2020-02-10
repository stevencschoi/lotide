const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns the key of an object based on the that key's value", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});