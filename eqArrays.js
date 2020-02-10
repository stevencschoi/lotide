const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// receive two arrays as arguments
const eqArrays = function(array1, array2) {
  // first verify if array lengths match; if they do not, we can exit the program
  if (array1.length !== array2.length) {
    return false;
  }
  
  // verify each item at each index of array matches
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// assertEqual(eqArrays([1,"true",true], [1,"true",true]), true);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false