// if the value exists in the object, return the key of the given value
// loop through the keys using Object.keys(obj)

// check if value exists in object
const findKeyByValue = function(obj, value) {
  // the index represented by keys in object
  const objKeys = Object.keys(obj);
  // loop through obj keys
  for (const key of objKeys) {
    console.log("the value of objKeys is ",key);
    // if value exists in the given object at "index" of objKeys return
    if (value === obj[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;