const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// if the value exists in the object, return the key of the given value
// loop through the keys using Object.keys(obj)

// check if value exists in object
const findKeyByValue = function(obj, value) {
  // the index represented by keys in object
  const objKeys = Object.keys(obj);
  // loop through obj keys
  for (const key of objKeys) {
    console.log("the value of objKeys is ",key);
    // if value exists in the given object at "index" of objKeys return
    if (value === obj[key]) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);