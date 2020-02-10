// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // create empty object to store items and count of each item
  const results = {};
  // loop through array;
  for (const item of allItems) {
    //if item exists in array, count++
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        // if item does not exist in array, add it to the array and set count to 1
        results[item] = 1;
      }
    }
  }
  
  return results;
};

module.exports = countOnly;