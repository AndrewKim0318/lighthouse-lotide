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

const without = function(arr1, arr2) {
  // input :  two arrays
  // output:  an altered array that removes all elements that are in arr2 from arr1

  let outputArray = [];

  //For each element in arr1, check to see if they are in arr2
  // If the element in arr1 is in arr2, do not added that element into the output array
  for (let i = 0; i < arr1.length; i++) {
    let included = false;

    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i] === arr2[j]) {
        included = true;
      }

    }

    if (included === false) {
      outputArray.push(arr1[i]);
    }

  }
  return outputArray;
};

console.log(without([1,2,3,1], [1,2]));
console.log(without([1,2,3],[1]));

let words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse", "hello"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);