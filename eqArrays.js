const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;