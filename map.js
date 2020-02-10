const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
};

const eqArrays = function(array1, array2) {
  // verify each item at each index of array matches
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const moreWords = ["eminem", "usher", "2pac"];
const numbers = [2,3,4];
console.log(assertArraysEqual(map(moreWords, word => word[0]), ["e", "u", "2"])); // true
console.log(assertArraysEqual(map(numbers, num => num * 2), [4,6,8])); // true
console.log(assertArraysEqual(map(numbers, num => num * 3), [6,9,9])); // false
