const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("should return 1 from an input of firstNames", () => {
    
    assert.deepEqual(countOnly(firstNames, { "Jason": true }), { "Jason": 1 });
  });
});