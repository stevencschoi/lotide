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
}

// return the indices in the string where the character is found
const letterPositions = function(sentence) {
  const results = {};
  // for loop to identify letter in sentence and return index
  for (let letter in sentence) {
    if (sentence[letter]) {
      results[sentence[letter]] = sentence.indexOf(sentence[letter]);
    }
  }
  delete results[" "];
  return results
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
// console.log(assertArraysEqual(letterPositions("hello")),{ h:0,e:1,l:2,3,o:4 })