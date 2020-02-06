const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// takes an object and callback function
// return the first ***key*** with truthy evaluation

// loop through the object to find the value to evaluate
const findKey = function(obj, fn) {
  // store keys in variable
  const vals = Object.values(obj); // vals is an array of objects - how to obtain the index?
  // console.log(vals);
  for (const val in vals) { // val is the index - how to identify the key?
    console.log(fn(vals[val]));
    // if the value matches the function expression of the object, return the key
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"