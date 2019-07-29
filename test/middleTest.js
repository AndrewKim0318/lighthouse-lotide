const index = require('../index');
const eqArrays = index.eqArrays;
const assert = require('chai').assert;
const middle   = index.middle;

describe("#middle", () => {
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2,3]), true);
  });

  it("returns [] for ['5']", () => {
    assert.strictEqual(eqArrays(middle([1]), []), true);
  });

  it("returns [] for []", () => {
    assert.strictEqual(eqArrays(middle([]), []), true);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [1]), false);
  });
});
