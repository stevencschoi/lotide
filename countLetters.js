const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
// take in string, return count of each letter
// requires defining a key value pair
const countLetters = function(string) {
  // convert string to lowercase with no spaces
  const noSpaces = string.toLowerCase().split(' ').join('');
  // create empty object to store count
  let lettersInString = {};
  // count letters that exists in string; conditional if truthy then increment
  for (const letter of noSpaces) {
    if (lettersInString[letter]) {
      lettersInString[letter] += 1;
    } else {
      lettersInString[letter] = 1;
    }
  }
  return lettersInString;
};

console.log(countLetters("Lighthouse in the house"));