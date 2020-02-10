// return the indices in the string where the character is found - indexOf?
// return as an array - create empty array within for loop?
// loop through each character in the string and return each index

const letterPositions = function(sentence) {
  const results = {};
  // for loop to identify letter in sentence
  for (let i = 0; i < sentence.length; i++) {
    // return the index and store in results object
    // if character in sentence exists in results, add to the array - else, set it to i
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  delete results[" "];
  return results;
};

// console.log(letterPositions("lighthouse in the house"));

// console.log(assertArraysEqual(letterPositions("hello")),{ h:0,e:1,l:2,3,o:4 })

module.exports = letterPositions;