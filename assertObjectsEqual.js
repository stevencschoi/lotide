// const assertArraysEqual = function(array1, array2) {
//   eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
// };

const eqArrays = function(array1, array2) {
  // verify each item at each index of array matches
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (const key of objKeys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// take in two objects and return appropriate message
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
// console.log(`Example label: ${inspect(actual)}`);