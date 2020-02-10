// const assertArraysEqual = function(array1, array2) {
//   eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
// };

// const eqArrays = function(array1, array2) {
//   // verify each item at each index of array matches
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const flatten = function(array) {
  return array.reduce((arr, x) => arr.concat(x),[]);
};

module.exports = flatten;