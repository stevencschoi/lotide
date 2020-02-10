const assertEqual = require('./assertEqual');
const tail = function(array) {
  return array.slice(1, array.length + 1);
};

module.exports = tail;