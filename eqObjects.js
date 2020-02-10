const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  // loop through obj1 keys and compare to obj2 keys
  for (const key of objKeys1) {
    if (Array.isArray(obj1[key])) {
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
    // assuming obj1 and obj2 are the same, we can check if the values at the identical key (index) for obj1 and obj2 are the same
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

module.exports = eqObjects;