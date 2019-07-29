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

const eqArrays = function(arr1, arr2) {
  // input: two arrays
  // output: boolean, True if arr1 is equivalent to arr2, False if arr1 is not equivalent to arr2

  let equal = true;
  //Test to see if arr1 has the same length as arr2
  if (arr1.length === arr2.length) {
    // if the length of arr1 and arr2 are the same, test to see if arr1[index] == arr2[index]
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        equal =  eqArrays(arr1[i], arr2[i]);
      } else if (arr1[i] === arr2[i]) {
        equal = true;
      } else {
        equal = false;
        return equal;
      }
    }
  } else {
    equal = false;
    return equal;
  }

  return equal;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4,[5, 6]]], [[2, 3], [4, [5,6]]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
