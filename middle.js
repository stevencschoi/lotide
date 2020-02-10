// create a function that returns the middle elements of a provided array
// for even numbers return two elements
// if there are 2 or less elements, return an empty array []

// calculate the middle index of a given array
const middle = function(arr) {
  let midEls = [];
  let midIndex = (arr.length - 1) / 2;
  
  if (arr.length <= 2) {
    return midEls;
  }

  if (midIndex % 1 === 0) {
    midEls.push(arr[midIndex]);
  } else {
    midEls.push(arr[Math.floor(midIndex)], arr[Math.floor(midIndex + 1)]);
  }
  return midEls;
};

module.exports = middle;