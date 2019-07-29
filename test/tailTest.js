const assert = require('chai').assert;
const index = require('../index');
const eqArrays = index.eqArrays;
const tail = index.tail;
//TEST CODE
describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays(tail([1, 2, 3, 4]), [2,3,4]), true);
  });

  it("returns [] for ['5']", () => {
    assert.strictEqual(eqArrays(tail([1]), []), true);
  });

  it("returns [] for []", () => {
    assert.strictEqual(eqArrays(tail([]), []), true);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays(tail([1, 2, 3, 4]), [1]), false);
  });
});