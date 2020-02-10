const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba),true);
assertEqual(eqObjects(ab,abc), false);