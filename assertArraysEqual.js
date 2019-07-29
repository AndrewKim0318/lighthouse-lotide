const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  // input: two arrays
  // output: a message reminding user if the two arguements are equal or unequal
  
  let equal = eqArrays(arr1, arr2);
  let result = "";
  //Test to see if arr1 has the same length as arr2
  if (equal) {
    // if the length of arr1 and arr2 are the same, test to see if arr1[index] == arr2[index]
    result += `✅Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    result += `🔴Assertion Failed: [${arr1}] !== [${arr2}]`;
  }

  console.log(result);
};

module.exports = assertArraysEqual;