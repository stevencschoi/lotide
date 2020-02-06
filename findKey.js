const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// loop through the object to find the value to evaluate
const findKey = function(obj, fn) {
  for (let [key, value] of Object.entries(obj)) {
    if (fn(value)) {
      return key;
    }
  }
};

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma")); // => "noma"

console.log(assertEqual(findKey({
  "Warriors" : { chamionships: 5},
  "Raptors": { championships: 1},
  "Mavericks": { championships: 1},
}, x => x.championships === 1), "Raptors"));