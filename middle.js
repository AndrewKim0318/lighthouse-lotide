const eqArrays = function(arr1, arr2) {
  // input: two arrays
  // output: boolean, True if arr1 is equivalent to arr2, False if arr1 is not equivalent to arr2

  let equal = true;
  //Test to see if arr1 has the same length as arr2
  if (arr1.length === arr2.length) {
    // if the length of arr1 and arr2 are the same, test to see if arr1[index] == arr2[index]
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
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

const middleArray = function(arr1) {
  // input: an array and a boolean
  // output:  an array that include the number(s) in the middle of the input array, should be two numbers if arr1 is even, should be 1 number if arr1 is odd
  // if length of arr1 is less than or equal to 2, the output should be an empty array
  let outputArray = [];
  let middleIndex = 0;

  if (arr1.length <= 2) {
    return outputArray;
  } else {
    // see if the input array is even or odd
    if (arr1.length % 2 === 0) {
      middleIndex = (arr1.length / 2) - 1;
      outputArray.push(arr1[middleIndex]);
      middleIndex = (arr1.length / 2);
      outputArray.push(arr1[middleIndex]);
      return outputArray;
    } else {
      middleIndex = Math.ceil((arr1.length / 2) - 1);
      outputArray.push(arr1[middleIndex]);
      return outputArray;
    }
  }
};

console.log(middleArray([15, 1, 4, 3]));