const assert = require('chai').assert;
const index = require('../index');
const assertEqual = index.assertEqual;
const eqArrays = index.eqArrays;

//TEST CODE
describe("#eqArrays", () => {
  it("returns true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays([[2, 3], [4,[5, 6]]], [[2, 3], [4, [5,6]]]), true);
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});

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