// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  const inputOne = actual;
  const inputTwo = expected;
  let result = "";
  if (inputOne === inputTwo) {
    result += `✅Assertion Passed: ${inputOne} === ${inputTwo}`;
  } else {
    result += `🔴Assertion Failed: ${inputOne} !== ${inputTwo}`;
  }
  return result;
};

//TEST CODE

module.exports = assertEqual;