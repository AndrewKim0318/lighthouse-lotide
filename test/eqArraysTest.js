const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST CODE

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4,[5, 6]]], [[2, 3], [4, [5,6]]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

module.exports = eqArrays;