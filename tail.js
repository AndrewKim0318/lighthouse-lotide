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

const tail = function(arr1) {
  let tailedArray = arr1.slice(1);
  return tailedArray;
};

const result = tail(assertEqual);
console.log(result);